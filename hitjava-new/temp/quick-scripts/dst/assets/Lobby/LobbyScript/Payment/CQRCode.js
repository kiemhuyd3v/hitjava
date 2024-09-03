
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/CQRCode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e309ekBTfZEgIrjIq+9bW8q', 'CQRCode');
// Lobby/LobbyScript/Payment/CQRCode.js

"use strict";

//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of 
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
//---------------------------------------------------------------------
// QR8bitByte
//---------------------------------------------------------------------
function QR8bitByte(data) {
  this.mode = QRMode.MODE_8BIT_BYTE;
  this.data = data;
}

QR8bitByte.prototype = {
  getLength: function getLength(buffer) {
    return this.data.length;
  },
  write: function write(buffer) {
    for (var i = 0; i < this.data.length; i++) {
      // not JIS ...
      buffer.put(this.data.charCodeAt(i), 8);
    }
  }
}; //---------------------------------------------------------------------
// QRCode
//---------------------------------------------------------------------

var QRCode = function QRCode(typeNumber, errorCorrectLevel) {
  this.typeNumber = typeNumber;
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null;
  this.moduleCount = 0;
  this.dataCache = null;
  this.dataList = new Array();
};

QRCode.prototype = {
  addData: function addData(data) {
    var newData = new QR8bitByte(data);
    this.dataList.push(newData);
    this.dataCache = null;
  },
  isDark: function isDark(row, col) {
    if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
      throw new Error(row + "," + col);
    }

    return this.modules[row][col];
  },
  getModuleCount: function getModuleCount() {
    return this.moduleCount;
  },
  make: function make() {
    // Calculate automatically typeNumber if provided is < 1
    if (this.typeNumber < 1) {
      var typeNumber = 1;

      for (typeNumber = 1; typeNumber < 40; typeNumber++) {
        var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
        var buffer = new QRBitBuffer();
        var totalDataCount = 0;

        for (var i = 0; i < rsBlocks.length; i++) {
          totalDataCount += rsBlocks[i].dataCount;
        }

        for (var _i = 0; _i < this.dataList.length; _i++) {
          var data = this.dataList[_i];
          buffer.put(data.mode, 4);
          buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
          data.write(buffer);
        }

        if (buffer.getLengthInBits() <= totalDataCount * 8) break;
      }

      this.typeNumber = typeNumber;
    }

    this.makeImpl(false, this.getBestMaskPattern());
  },
  makeImpl: function makeImpl(test, maskPattern) {
    this.moduleCount = this.typeNumber * 4 + 17;
    this.modules = new Array(this.moduleCount);

    for (var row = 0; row < this.moduleCount; row++) {
      this.modules[row] = new Array(this.moduleCount);

      for (var col = 0; col < this.moduleCount; col++) {
        this.modules[row][col] = null; //(col + row) % 3;
      }
    }

    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(test, maskPattern);

    if (this.typeNumber >= 7) {
      this.setupTypeNumber(test);
    }

    if (this.dataCache == null) {
      this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
    }

    this.mapData(this.dataCache, maskPattern);
  },
  setupPositionProbePattern: function setupPositionProbePattern(row, col) {
    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || this.moduleCount <= row + r) continue;

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || this.moduleCount <= col + c) continue;

        if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
          this.modules[row + r][col + c] = true;
        } else {
          this.modules[row + r][col + c] = false;
        }
      }
    }
  },
  getBestMaskPattern: function getBestMaskPattern() {
    var minLostPoint = 0;
    var pattern = 0;

    for (var i = 0; i < 8; i++) {
      this.makeImpl(true, i);
      var lostPoint = QRUtil.getLostPoint(this);

      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
      }
    }

    return pattern;
  },
  createMovieClip: function createMovieClip(target_mc, instance_name, depth) {
    var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
    var cs = 1;
    this.make();

    for (var row = 0; row < this.modules.length; row++) {
      var y = row * cs;

      for (var col = 0; col < this.modules[row].length; col++) {
        var x = col * cs;
        var dark = this.modules[row][col];

        if (dark) {
          qr_mc.beginFill(0, 100);
          qr_mc.moveTo(x, y);
          qr_mc.lineTo(x + cs, y);
          qr_mc.lineTo(x + cs, y + cs);
          qr_mc.lineTo(x, y + cs);
          qr_mc.endFill();
        }
      }
    }

    return qr_mc;
  },
  setupTimingPattern: function setupTimingPattern() {
    for (var r = 8; r < this.moduleCount - 8; r++) {
      if (this.modules[r][6] != null) {
        continue;
      }

      this.modules[r][6] = r % 2 == 0;
    }

    for (var c = 8; c < this.moduleCount - 8; c++) {
      if (this.modules[6][c] != null) {
        continue;
      }

      this.modules[6][c] = c % 2 == 0;
    }
  },
  setupPositionAdjustPattern: function setupPositionAdjustPattern() {
    var pos = QRUtil.getPatternPosition(this.typeNumber);

    for (var i = 0; i < pos.length; i++) {
      for (var j = 0; j < pos.length; j++) {
        var row = pos[i];
        var col = pos[j];

        if (this.modules[row][col] != null) {
          continue;
        }

        for (var r = -2; r <= 2; r++) {
          for (var c = -2; c <= 2; c++) {
            if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
              this.modules[row + r][col + c] = true;
            } else {
              this.modules[row + r][col + c] = false;
            }
          }
        }
      }
    }
  },
  setupTypeNumber: function setupTypeNumber(test) {
    var bits = QRUtil.getBCHTypeNumber(this.typeNumber);

    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
    }

    for (var _i2 = 0; _i2 < 18; _i2++) {
      var _mod = !test && (bits >> _i2 & 1) == 1;

      this.modules[_i2 % 3 + this.moduleCount - 8 - 3][Math.floor(_i2 / 3)] = _mod;
    }
  },
  setupTypeInfo: function setupTypeInfo(test, maskPattern) {
    var data = this.errorCorrectLevel << 3 | maskPattern;
    var bits = QRUtil.getBCHTypeInfo(data); // vertical		

    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;

      if (i < 6) {
        this.modules[i][8] = mod;
      } else if (i < 8) {
        this.modules[i + 1][8] = mod;
      } else {
        this.modules[this.moduleCount - 15 + i][8] = mod;
      }
    } // horizontal


    for (var _i3 = 0; _i3 < 15; _i3++) {
      var _mod2 = !test && (bits >> _i3 & 1) == 1;

      if (_i3 < 8) {
        this.modules[8][this.moduleCount - _i3 - 1] = _mod2;
      } else if (_i3 < 9) {
        this.modules[8][15 - _i3 - 1 + 1] = _mod2;
      } else {
        this.modules[8][15 - _i3 - 1] = _mod2;
      }
    } // fixed module


    this.modules[this.moduleCount - 8][8] = !test;
  },
  mapData: function mapData(data, maskPattern) {
    var inc = -1;
    var row = this.moduleCount - 1;
    var bitIndex = 7;
    var byteIndex = 0;

    for (var col = this.moduleCount - 1; col > 0; col -= 2) {
      if (col == 6) col--;

      while (true) {
        for (var c = 0; c < 2; c++) {
          if (this.modules[row][col - c] == null) {
            var dark = false;

            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) == 1;
            }

            var mask = QRUtil.getMask(maskPattern, row, col - c);

            if (mask) {
              dark = !dark;
            }

            this.modules[row][col - c] = dark;
            bitIndex--;

            if (bitIndex == -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }

        row += inc;

        if (row < 0 || this.moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  }
};
QRCode.PAD0 = 0xEC;
QRCode.PAD1 = 0x11;

QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {
  var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
  var buffer = new QRBitBuffer();

  for (var i = 0; i < dataList.length; i++) {
    var data = dataList[i];
    buffer.put(data.mode, 4);
    buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
    data.write(buffer);
  } // calc num max data.


  var totalDataCount = 0;

  for (var _i4 = 0; _i4 < rsBlocks.length; _i4++) {
    totalDataCount += rsBlocks[_i4].dataCount;
  }

  if (buffer.getLengthInBits() > totalDataCount * 8) {
    throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
  } // end code


  if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
    buffer.put(0, 4);
  } // padding


  while (buffer.getLengthInBits() % 8 != 0) {
    buffer.putBit(false);
  } // padding


  while (true) {
    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }

    buffer.put(QRCode.PAD0, 8);

    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }

    buffer.put(QRCode.PAD1, 8);
  }

  return QRCode.createBytes(buffer, rsBlocks);
};

QRCode.createBytes = function (buffer, rsBlocks) {
  var offset = 0;
  var maxDcCount = 0;
  var maxEcCount = 0;
  var dcdata = new Array(rsBlocks.length);
  var ecdata = new Array(rsBlocks.length);

  for (var r = 0; r < rsBlocks.length; r++) {
    var dcCount = rsBlocks[r].dataCount;
    var ecCount = rsBlocks[r].totalCount - dcCount;
    maxDcCount = Math.max(maxDcCount, dcCount);
    maxEcCount = Math.max(maxEcCount, ecCount);
    dcdata[r] = new Array(dcCount);

    for (var i = 0; i < dcdata[r].length; i++) {
      dcdata[r][i] = 0xff & buffer.buffer[i + offset];
    }

    offset += dcCount;
    var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
    var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
    var modPoly = rawPoly.mod(rsPoly);
    ecdata[r] = new Array(rsPoly.getLength() - 1);

    for (var _i5 = 0; _i5 < ecdata[r].length; _i5++) {
      var modIndex = _i5 + modPoly.getLength() - ecdata[r].length;
      ecdata[r][_i5] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
    }
  }

  var totalCodeCount = 0;

  for (var _i6 = 0; _i6 < rsBlocks.length; _i6++) {
    totalCodeCount += rsBlocks[_i6].totalCount;
  }

  var data = new Array(totalCodeCount);
  var index = 0;

  for (var _i7 = 0; _i7 < maxDcCount; _i7++) {
    for (var _r = 0; _r < rsBlocks.length; _r++) {
      if (_i7 < dcdata[_r].length) {
        data[index++] = dcdata[_r][_i7];
      }
    }
  }

  for (var _i8 = 0; _i8 < maxEcCount; _i8++) {
    for (var _r2 = 0; _r2 < rsBlocks.length; _r2++) {
      if (_i8 < ecdata[_r2].length) {
        data[index++] = ecdata[_r2][_i8];
      }
    }
  }

  return data;
}; //---------------------------------------------------------------------
// QRMode
//---------------------------------------------------------------------


var QRMode = {
  MODE_NUMBER: 1 << 0,
  MODE_ALPHA_NUM: 1 << 1,
  MODE_8BIT_BYTE: 1 << 2,
  MODE_KANJI: 1 << 3
}; //---------------------------------------------------------------------
// QRErrorCorrectLevel
//---------------------------------------------------------------------

var QRErrorCorrectLevel = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
}; //---------------------------------------------------------------------
// QRMaskPattern
//---------------------------------------------------------------------

var QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}; //---------------------------------------------------------------------
// QRUtil
//---------------------------------------------------------------------

var QRUtil = {
  PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
  G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
  G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
  G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
  getBCHTypeInfo: function getBCHTypeInfo(data) {
    var d = data << 10;

    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
    }

    return (data << 10 | d) ^ QRUtil.G15_MASK;
  },
  getBCHTypeNumber: function getBCHTypeNumber(data) {
    var d = data << 12;

    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
    }

    return data << 12 | d;
  },
  getBCHDigit: function getBCHDigit(data) {
    var digit = 0;

    while (data != 0) {
      digit++;
      data >>>= 1;
    }

    return digit;
  },
  getPatternPosition: function getPatternPosition(typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
  },
  getMask: function getMask(maskPattern, i, j) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i + j) % 2 == 0;

      case QRMaskPattern.PATTERN001:
        return i % 2 == 0;

      case QRMaskPattern.PATTERN010:
        return j % 3 == 0;

      case QRMaskPattern.PATTERN011:
        return (i + j) % 3 == 0;

      case QRMaskPattern.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;

      case QRMaskPattern.PATTERN101:
        return i * j % 2 + i * j % 3 == 0;

      case QRMaskPattern.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 == 0;

      case QRMaskPattern.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 == 0;

      default:
        throw new Error("bad maskPattern:" + maskPattern);
    }
  },
  getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
    var a = new QRPolynomial([1], 0);

    for (var i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
    }

    return a;
  },
  getLengthInBits: function getLengthInBits(mode, type) {
    if (1 <= type && type < 10) {
      // 1 - 9
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 10;

        case QRMode.MODE_ALPHA_NUM:
          return 9;

        case QRMode.MODE_8BIT_BYTE:
          return 8;

        case QRMode.MODE_KANJI:
          return 8;

        default:
          throw new Error("mode:" + mode);
      }
    } else if (type < 27) {
      // 10 - 26
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 12;

        case QRMode.MODE_ALPHA_NUM:
          return 11;

        case QRMode.MODE_8BIT_BYTE:
          return 16;

        case QRMode.MODE_KANJI:
          return 10;

        default:
          throw new Error("mode:" + mode);
      }
    } else if (type < 41) {
      // 27 - 40
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 14;

        case QRMode.MODE_ALPHA_NUM:
          return 13;

        case QRMode.MODE_8BIT_BYTE:
          return 16;

        case QRMode.MODE_KANJI:
          return 12;

        default:
          throw new Error("mode:" + mode);
      }
    } else {
      throw new Error("type:" + type);
    }
  },
  getLostPoint: function getLostPoint(qrCode) {
    var moduleCount = qrCode.getModuleCount();
    var lostPoint = 0; // LEVEL1

    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount; col++) {
        var sameCount = 0;
        var dark = qrCode.isDark(row, col);

        for (var r = -1; r <= 1; r++) {
          if (row + r < 0 || moduleCount <= row + r) {
            continue;
          }

          for (var c = -1; c <= 1; c++) {
            if (col + c < 0 || moduleCount <= col + c) {
              continue;
            }

            if (r == 0 && c == 0) {
              continue;
            }

            if (dark == qrCode.isDark(row + r, col + c)) {
              sameCount++;
            }
          }
        }

        if (sameCount > 5) {
          lostPoint += 3 + sameCount - 5;
        }
      }
    } // LEVEL2


    for (var _row = 0; _row < moduleCount - 1; _row++) {
      for (var _col = 0; _col < moduleCount - 1; _col++) {
        var count = 0;
        if (qrCode.isDark(_row, _col)) count++;
        if (qrCode.isDark(_row + 1, _col)) count++;
        if (qrCode.isDark(_row, _col + 1)) count++;
        if (qrCode.isDark(_row + 1, _col + 1)) count++;

        if (count == 0 || count == 4) {
          lostPoint += 3;
        }
      }
    } // LEVEL3


    for (var _row2 = 0; _row2 < moduleCount; _row2++) {
      for (var _col2 = 0; _col2 < moduleCount - 6; _col2++) {
        if (qrCode.isDark(_row2, _col2) && !qrCode.isDark(_row2, _col2 + 1) && qrCode.isDark(_row2, _col2 + 2) && qrCode.isDark(_row2, _col2 + 3) && qrCode.isDark(_row2, _col2 + 4) && !qrCode.isDark(_row2, _col2 + 5) && qrCode.isDark(_row2, _col2 + 6)) {
          lostPoint += 40;
        }
      }
    }

    for (var _col3 = 0; _col3 < moduleCount; _col3++) {
      for (var _row3 = 0; _row3 < moduleCount - 6; _row3++) {
        if (qrCode.isDark(_row3, _col3) && !qrCode.isDark(_row3 + 1, _col3) && qrCode.isDark(_row3 + 2, _col3) && qrCode.isDark(_row3 + 3, _col3) && qrCode.isDark(_row3 + 4, _col3) && !qrCode.isDark(_row3 + 5, _col3) && qrCode.isDark(_row3 + 6, _col3)) {
          lostPoint += 40;
        }
      }
    } // LEVEL4


    var darkCount = 0;

    for (var _col4 = 0; _col4 < moduleCount; _col4++) {
      for (var _row4 = 0; _row4 < moduleCount; _row4++) {
        if (qrCode.isDark(_row4, _col4)) {
          darkCount++;
        }
      }
    }

    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  }
}; //---------------------------------------------------------------------
// QRMath
//---------------------------------------------------------------------

var QRMath = {
  glog: function glog(n) {
    if (n < 1) {
      throw new Error("glog(" + n + ")");
    }

    return QRMath.LOG_TABLE[n];
  },
  gexp: function gexp(n) {
    while (n < 0) {
      n += 255;
    }

    while (n >= 256) {
      n -= 255;
    }

    return QRMath.EXP_TABLE[n];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256)
};

for (var i = 0; i < 8; i++) {
  QRMath.EXP_TABLE[i] = 1 << i;
}

for (var _i9 = 8; _i9 < 256; _i9++) {
  QRMath.EXP_TABLE[_i9] = QRMath.EXP_TABLE[_i9 - 4] ^ QRMath.EXP_TABLE[_i9 - 5] ^ QRMath.EXP_TABLE[_i9 - 6] ^ QRMath.EXP_TABLE[_i9 - 8];
}

for (var _i10 = 0; _i10 < 255; _i10++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[_i10]] = _i10;
} //---------------------------------------------------------------------
// QRPolynomial
//---------------------------------------------------------------------


function QRPolynomial(num, shift) {
  if (num.length == undefined) {
    throw new Error(num.length + "/" + shift);
  }

  var offset = 0;

  while (offset < num.length && num[offset] == 0) {
    offset++;
  }

  this.num = new Array(num.length - offset + shift);

  for (var _i11 = 0; _i11 < num.length - offset; _i11++) {
    this.num[_i11] = num[_i11 + offset];
  }
}

QRPolynomial.prototype = {
  get: function get(index) {
    return this.num[index];
  },
  getLength: function getLength() {
    return this.num.length;
  },
  multiply: function multiply(e) {
    var num = new Array(this.getLength() + e.getLength() - 1);

    for (var _i12 = 0; _i12 < this.getLength(); _i12++) {
      for (var j = 0; j < e.getLength(); j++) {
        num[_i12 + j] ^= QRMath.gexp(QRMath.glog(this.get(_i12)) + QRMath.glog(e.get(j)));
      }
    }

    return new QRPolynomial(num, 0);
  },
  mod: function mod(e) {
    if (this.getLength() - e.getLength() < 0) {
      return this;
    }

    var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
    var num = new Array(this.getLength());

    for (var _i13 = 0; _i13 < this.getLength(); _i13++) {
      num[_i13] = this.get(_i13);
    }

    for (var _i14 = 0; _i14 < e.getLength(); _i14++) {
      num[_i14] ^= QRMath.gexp(QRMath.glog(e.get(_i14)) + ratio);
    } // recursive call


    return new QRPolynomial(num, 0).mod(e);
  }
}; //---------------------------------------------------------------------
// QRRSBlock
//---------------------------------------------------------------------

function QRRSBlock(totalCount, dataCount) {
  this.totalCount = totalCount;
  this.dataCount = dataCount;
}

QRRSBlock.RS_BLOCK_TABLE = [// L
// M
// Q
// H
// 1
[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], // 2
[1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], // 3
[1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], // 4		
[1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], // 5
[1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], // 6
[2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], // 7		
[2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], // 8
[2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], // 9
[2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], // 10		
[2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], // 11
[4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], // 12
[2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], // 13
[4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], // 14
[3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], // 15
[5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], // 16
[5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], // 17
[1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], // 18
[5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], // 19
[3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], // 20
[3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], // 21
[4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], // 22
[2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], // 23
[4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], // 24
[6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], // 25
[8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], // 26
[10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], // 27
[8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], // 28
[3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], // 29
[7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], // 30
[5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], // 31
[13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], // 32
[17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], // 33
[17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], // 34
[13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], // 35
[12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], // 36
[6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], // 37
[17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], // 38
[4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], // 39
[20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], // 40
[19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];

QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
  var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

  if (rsBlock == undefined) {
    throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
  }

  var length = rsBlock.length / 3;
  var list = new Array();

  for (var _i15 = 0; _i15 < length; _i15++) {
    var count = rsBlock[_i15 * 3 + 0];
    var totalCount = rsBlock[_i15 * 3 + 1];
    var dataCount = rsBlock[_i15 * 3 + 2];

    for (var j = 0; j < count; j++) {
      list.push(new QRRSBlock(totalCount, dataCount));
    }
  }

  return list;
};

QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
  switch (errorCorrectLevel) {
    case QRErrorCorrectLevel.L:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];

    case QRErrorCorrectLevel.M:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];

    case QRErrorCorrectLevel.Q:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];

    case QRErrorCorrectLevel.H:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];

    default:
      return undefined;
  }
}; //---------------------------------------------------------------------
// QRBitBuffer
//---------------------------------------------------------------------


function QRBitBuffer() {
  this.buffer = new Array();
  this.length = 0;
}

QRBitBuffer.prototype = {
  get: function get(index) {
    var bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
  },
  put: function put(num, length) {
    for (var _i16 = 0; _i16 < length; _i16++) {
      this.putBit((num >>> length - _i16 - 1 & 1) == 1);
    }
  },
  getLengthInBits: function getLengthInBits() {
    return this.length;
  },
  putBit: function putBit(bit) {
    var bufIndex = Math.floor(this.length / 8);

    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }

    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }

    this.length++;
  }
};
/**
 * 二维码组件
 */

var CQRCode = cc.Class({
  "extends": cc.Graphics,
  properties: {
    string: {
      "default": 'Hello World!',
      notify: function notify(oldValue) {
        if (this.string === oldValue) {
          return;
        }

        this.setContent();
      }
    },
    backColor: {
      type: cc.Color,
      "default": cc.Color.WHITE,
      notify: function notify() {
        this.setContent();
      }
    },
    foreColor: {
      type: cc.Color,
      "default": cc.Color.BLACK,
      notify: function notify(old) {
        this.node.color = this.foreColor;
        this.setContent();
      }
    },
    margin: {
      type: cc.Float,
      "default": 10,
      notify: function notify(old) {
        if (old === this.margin) {
          return;
        }

        this.setContent();
      }
    },
    _size: 200,
    size: {
      type: cc.Float,
      get: function get() {
        return this._size;
      },
      set: function set(value) {
        if (this._size === value) {
          return;
        }

        this.node.setContentSize(value, value);
        this.setContent();
        this._size = value;
      }
    }
  },
  onLoad: function onLoad() {
    this.node.setContentSize(this._size, this._size);
    this.setContent();
  },
  setString: function setString(customData, sender) {
    if (sender.string) {
      this.string = sender.string;
    }
  },
  setContent: function setContent() {
    this.clear(); //背景色

    this.fillColor = this.backColor;
    var width = this.node.width;
    var offsetX = -width * this.node.anchorX;
    var offsetY = -width * this.node.anchorY;
    this.rect(offsetX, offsetY, width, width);
    this.fill();
    this.close(); //生成二维码数据

    var qrcode = new QRCode(-1, 2);
    qrcode.addData(this.string);
    qrcode.make();
    this.fillColor = this.foreColor;
    var size = width - this.margin * 2;
    var num = qrcode.getModuleCount();
    var tileW = size / num;
    var tileH = size / num;
    var w = Math.ceil(tileW);
    var h = Math.ceil(tileH);

    for (var row = 0; row < num; row++) {
      for (var col = 0; col < num; col++) {
        if (qrcode.isDark(row, col)) {
          this.rect(offsetX + this.margin + col * tileW, offsetX + size - tileH - Math.round(row * tileH) + this.margin, w, h);
          this.fill();
        }
      }
    }
  }
});
cc.game.once(cc.game.EVENT_ENGINE_INITED, function () {
  CQRCode._assembler = cc.Graphics._assembler;
});
cc.Class.Attr.setClassAttr(CQRCode, 'lineWidth', 'visible', false);
cc.Class.Attr.setClassAttr(CQRCode, 'lineJoin', 'visible', false);
cc.Class.Attr.setClassAttr(CQRCode, 'lineCap', 'visible', false);
cc.Class.Attr.setClassAttr(CQRCode, 'strokeColor', 'visible', false);
cc.Class.Attr.setClassAttr(CQRCode, 'miterLimit', 'visible', false);
cc.Class.Attr.setClassAttr(CQRCode, 'fillColor', 'visible', false);
module.exports = CQRCode;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxDUVJDb2RlLmpzIl0sIm5hbWVzIjpbIlFSOGJpdEJ5dGUiLCJkYXRhIiwibW9kZSIsIlFSTW9kZSIsIk1PREVfOEJJVF9CWVRFIiwicHJvdG90eXBlIiwiZ2V0TGVuZ3RoIiwiYnVmZmVyIiwibGVuZ3RoIiwid3JpdGUiLCJpIiwicHV0IiwiY2hhckNvZGVBdCIsIlFSQ29kZSIsInR5cGVOdW1iZXIiLCJlcnJvckNvcnJlY3RMZXZlbCIsIm1vZHVsZXMiLCJtb2R1bGVDb3VudCIsImRhdGFDYWNoZSIsImRhdGFMaXN0IiwiQXJyYXkiLCJhZGREYXRhIiwibmV3RGF0YSIsInB1c2giLCJpc0RhcmsiLCJyb3ciLCJjb2wiLCJFcnJvciIsImdldE1vZHVsZUNvdW50IiwibWFrZSIsInJzQmxvY2tzIiwiUVJSU0Jsb2NrIiwiZ2V0UlNCbG9ja3MiLCJRUkJpdEJ1ZmZlciIsInRvdGFsRGF0YUNvdW50IiwiZGF0YUNvdW50IiwiUVJVdGlsIiwiZ2V0TGVuZ3RoSW5CaXRzIiwibWFrZUltcGwiLCJnZXRCZXN0TWFza1BhdHRlcm4iLCJ0ZXN0IiwibWFza1BhdHRlcm4iLCJzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuIiwic2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4iLCJzZXR1cFRpbWluZ1BhdHRlcm4iLCJzZXR1cFR5cGVJbmZvIiwic2V0dXBUeXBlTnVtYmVyIiwiY3JlYXRlRGF0YSIsIm1hcERhdGEiLCJyIiwiYyIsIm1pbkxvc3RQb2ludCIsInBhdHRlcm4iLCJsb3N0UG9pbnQiLCJnZXRMb3N0UG9pbnQiLCJjcmVhdGVNb3ZpZUNsaXAiLCJ0YXJnZXRfbWMiLCJpbnN0YW5jZV9uYW1lIiwiZGVwdGgiLCJxcl9tYyIsImNyZWF0ZUVtcHR5TW92aWVDbGlwIiwiY3MiLCJ5IiwieCIsImRhcmsiLCJiZWdpbkZpbGwiLCJtb3ZlVG8iLCJsaW5lVG8iLCJlbmRGaWxsIiwicG9zIiwiZ2V0UGF0dGVyblBvc2l0aW9uIiwiaiIsImJpdHMiLCJnZXRCQ0hUeXBlTnVtYmVyIiwibW9kIiwiTWF0aCIsImZsb29yIiwiZ2V0QkNIVHlwZUluZm8iLCJpbmMiLCJiaXRJbmRleCIsImJ5dGVJbmRleCIsIm1hc2siLCJnZXRNYXNrIiwiUEFEMCIsIlBBRDEiLCJwdXRCaXQiLCJjcmVhdGVCeXRlcyIsIm9mZnNldCIsIm1heERjQ291bnQiLCJtYXhFY0NvdW50IiwiZGNkYXRhIiwiZWNkYXRhIiwiZGNDb3VudCIsImVjQ291bnQiLCJ0b3RhbENvdW50IiwibWF4IiwicnNQb2x5IiwiZ2V0RXJyb3JDb3JyZWN0UG9seW5vbWlhbCIsInJhd1BvbHkiLCJRUlBvbHlub21pYWwiLCJtb2RQb2x5IiwibW9kSW5kZXgiLCJnZXQiLCJ0b3RhbENvZGVDb3VudCIsImluZGV4IiwiTU9ERV9OVU1CRVIiLCJNT0RFX0FMUEhBX05VTSIsIk1PREVfS0FOSkkiLCJRUkVycm9yQ29ycmVjdExldmVsIiwiTCIsIk0iLCJRIiwiSCIsIlFSTWFza1BhdHRlcm4iLCJQQVRURVJOMDAwIiwiUEFUVEVSTjAwMSIsIlBBVFRFUk4wMTAiLCJQQVRURVJOMDExIiwiUEFUVEVSTjEwMCIsIlBBVFRFUk4xMDEiLCJQQVRURVJOMTEwIiwiUEFUVEVSTjExMSIsIlBBVFRFUk5fUE9TSVRJT05fVEFCTEUiLCJHMTUiLCJHMTgiLCJHMTVfTUFTSyIsImQiLCJnZXRCQ0hEaWdpdCIsImRpZ2l0IiwiZXJyb3JDb3JyZWN0TGVuZ3RoIiwiYSIsIm11bHRpcGx5IiwiUVJNYXRoIiwiZ2V4cCIsInR5cGUiLCJxckNvZGUiLCJzYW1lQ291bnQiLCJjb3VudCIsImRhcmtDb3VudCIsInJhdGlvIiwiYWJzIiwiZ2xvZyIsIm4iLCJMT0dfVEFCTEUiLCJFWFBfVEFCTEUiLCJudW0iLCJzaGlmdCIsInVuZGVmaW5lZCIsImUiLCJSU19CTE9DS19UQUJMRSIsInJzQmxvY2siLCJnZXRSc0Jsb2NrVGFibGUiLCJsaXN0IiwiYnVmSW5kZXgiLCJiaXQiLCJDUVJDb2RlIiwiY2MiLCJDbGFzcyIsIkdyYXBoaWNzIiwicHJvcGVydGllcyIsInN0cmluZyIsIm5vdGlmeSIsIm9sZFZhbHVlIiwic2V0Q29udGVudCIsImJhY2tDb2xvciIsIkNvbG9yIiwiV0hJVEUiLCJmb3JlQ29sb3IiLCJCTEFDSyIsIm9sZCIsIm5vZGUiLCJjb2xvciIsIm1hcmdpbiIsIkZsb2F0IiwiX3NpemUiLCJzaXplIiwic2V0IiwidmFsdWUiLCJzZXRDb250ZW50U2l6ZSIsIm9uTG9hZCIsInNldFN0cmluZyIsImN1c3RvbURhdGEiLCJzZW5kZXIiLCJjbGVhciIsImZpbGxDb2xvciIsIndpZHRoIiwib2Zmc2V0WCIsImFuY2hvclgiLCJvZmZzZXRZIiwiYW5jaG9yWSIsInJlY3QiLCJmaWxsIiwiY2xvc2UiLCJxcmNvZGUiLCJ0aWxlVyIsInRpbGVIIiwidyIsImNlaWwiLCJoIiwicm91bmQiLCJnYW1lIiwib25jZSIsIkVWRU5UX0VOR0lORV9JTklURUQiLCJfYXNzZW1ibGVyIiwiQXR0ciIsInNldENsYXNzQXR0ciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDdEIsT0FBS0MsSUFBTCxHQUFZQyxNQUFNLENBQUNDLGNBQW5CO0FBQ0EsT0FBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7O0FBRURELFVBQVUsQ0FBQ0ssU0FBWCxHQUF1QjtBQUVuQkMsRUFBQUEsU0FBUyxFQUFFLG1CQUFVQyxNQUFWLEVBQWtCO0FBQ3pCLFdBQU8sS0FBS04sSUFBTCxDQUFVTyxNQUFqQjtBQUNILEdBSmtCO0FBTW5CQyxFQUFBQSxLQUFLLEVBQUUsZUFBVUYsTUFBVixFQUFrQjtBQUNyQixTQUFLLElBQUlHLENBQUMsR0FBRyxDQUFi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b0IsRUFZcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0Fab0IsRUFhcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0Fib0IsRUFjcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLENBZG9CLEVBZXBCLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksRUFBWixDQWZvQixFQWdCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLENBaEJvQixFQWlCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLENBakJvQixFQWtCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLENBbEJvQixFQW1CcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLENBbkJvQixFQW9CcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLENBcEJvQixFQXFCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLENBckJvQixFQXNCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLENBdEJvQixFQXVCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBdkJvQixFQXdCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBeEJvQixFQXlCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBekJvQixFQTBCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBMUJvQixFQTJCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBM0JvQixFQTRCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEdBQXBCLENBNUJvQixFQTZCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBN0JvQixFQThCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBOUJvQixFQStCcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBL0JvQixFQWdDcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBaENvQixFQWlDcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBakNvQixFQWtDcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBbENvQixFQW1DcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLENBbkNvQixFQW9DcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLENBcENvQixFQXFDcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLENBckNvQixFQXNDcEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVB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RUFBb0MsV0FBcEMsRUFBaUQsU0FBakQsRUFBNEQsS0FBNUQ7QUFFQW1ELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBELE9BQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUkNvZGUgZm9yIEphdmFTY3JpcHRcclxuLy9cclxuLy8gQ29weXJpZ2h0IChjKSAyMDA5IEthenVoaWtvIEFyYXNlXHJcbi8vXHJcbi8vIFVSTDogaHR0cDovL3d3dy5kLXByb2plY3QuY29tL1xyXG4vL1xyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XHJcbi8vICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuLy9cclxuLy8gVGhlIHdvcmQgXCJRUiBDb2RlXCIgaXMgcmVnaXN0ZXJlZCB0cmFkZW1hcmsgb2YgXHJcbi8vIERFTlNPIFdBVkUgSU5DT1JQT1JBVEVEXHJcbi8vICAgaHR0cDovL3d3dy5kZW5zby13YXZlLmNvbS9xcmNvZGUvZmFxcGF0ZW50LWUuaHRtbFxyXG4vL1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUVI4Yml0Qnl0ZVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gUVI4Yml0Qnl0ZShkYXRhKSB7XHJcbiAgICB0aGlzLm1vZGUgPSBRUk1vZGUuTU9ERV84QklUX0JZVEU7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG59XHJcblxyXG5RUjhiaXRCeXRlLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBnZXRMZW5ndGg6IGZ1bmN0aW9uIChidWZmZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcclxuICAgIH0sXHJcblxyXG4gICAgd3JpdGU6IGZ1bmN0aW9uIChidWZmZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBub3QgSklTIC4uLlxyXG4gICAgICAgICAgICBidWZmZXIucHV0KHRoaXMuZGF0YS5jaGFyQ29kZUF0KGkpLCA4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUkNvZGVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBRUkNvZGUgPSBmdW5jdGlvbiAodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgIHRoaXMudHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XHJcbiAgICB0aGlzLmVycm9yQ29ycmVjdExldmVsID0gZXJyb3JDb3JyZWN0TGV2ZWw7XHJcbiAgICB0aGlzLm1vZHVsZXMgPSBudWxsO1xyXG4gICAgdGhpcy5tb2R1bGVDb3VudCA9IDA7XHJcbiAgICB0aGlzLmRhdGFDYWNoZSA9IG51bGw7XHJcbiAgICB0aGlzLmRhdGFMaXN0ID0gbmV3IEFycmF5KCk7XHJcbn1cclxuXHJcblFSQ29kZS5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgYWRkRGF0YTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBsZXQgbmV3RGF0YSA9IG5ldyBRUjhiaXRCeXRlKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuZGF0YUxpc3QucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB0aGlzLmRhdGFDYWNoZSA9IG51bGw7XHJcbiAgICB9LFxyXG5cclxuICAgIGlzRGFyazogZnVuY3Rpb24gKHJvdywgY29sKSB7XHJcbiAgICAgICAgaWYgKHJvdyA8IDAgfHwgdGhpcy5tb2R1bGVDb3VudCA8PSByb3cgfHwgY29sIDwgMCB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IGNvbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iocm93ICsgXCIsXCIgKyBjb2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGVzW3Jvd11bY29sXTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TW9kdWxlQ291bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGVDb3VudDtcclxuICAgIH0sXHJcblxyXG4gICAgbWFrZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBhdXRvbWF0aWNhbGx5IHR5cGVOdW1iZXIgaWYgcHJvdmlkZWQgaXMgPCAxXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZU51bWJlciA8IDEpIHtcclxuICAgICAgICAgICAgbGV0IHR5cGVOdW1iZXIgPSAxO1xyXG4gICAgICAgICAgICBmb3IgKHR5cGVOdW1iZXIgPSAxOyB0eXBlTnVtYmVyIDwgNDA7IHR5cGVOdW1iZXIrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJzQmxvY2tzID0gUVJSU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBidWZmZXIgPSBuZXcgUVJCaXRCdWZmZXIoKTtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbERhdGFDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxEYXRhQ291bnQgKz0gcnNCbG9ja3NbaV0uZGF0YUNvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXIucHV0KGRhdGEubW9kZSwgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBRUlV0aWwuZ2V0TGVuZ3RoSW5CaXRzKGRhdGEubW9kZSwgdHlwZU51bWJlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEud3JpdGUoYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPD0gdG90YWxEYXRhQ291bnQgKiA4KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWFrZUltcGwoZmFsc2UsIHRoaXMuZ2V0QmVzdE1hc2tQYXR0ZXJuKCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBtYWtlSW1wbDogZnVuY3Rpb24gKHRlc3QsIG1hc2tQYXR0ZXJuKSB7XHJcblxyXG4gICAgICAgIHRoaXMubW9kdWxlQ291bnQgPSB0aGlzLnR5cGVOdW1iZXIgKiA0ICsgMTc7XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbmV3IEFycmF5KHRoaXMubW9kdWxlQ291bnQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLm1vZHVsZUNvdW50OyByb3crKykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb2R1bGVzW3Jvd10gPSBuZXcgQXJyYXkodGhpcy5tb2R1bGVDb3VudCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLm1vZHVsZUNvdW50OyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVzW3Jvd11bY29sXSA9IG51bGw7Ly8oY29sICsgcm93KSAlIDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLCAwKTtcclxuICAgICAgICB0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4odGhpcy5tb2R1bGVDb3VudCAtIDcsIDApO1xyXG4gICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLCB0aGlzLm1vZHVsZUNvdW50IC0gNyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybigpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBUaW1pbmdQYXR0ZXJuKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFR5cGVJbmZvKHRlc3QsIG1hc2tQYXR0ZXJuKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZU51bWJlciA+PSA3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBUeXBlTnVtYmVyKHRlc3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YUNhY2hlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhQ2FjaGUgPSBRUkNvZGUuY3JlYXRlRGF0YSh0aGlzLnR5cGVOdW1iZXIsIHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwsIHRoaXMuZGF0YUxpc3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tYXBEYXRhKHRoaXMuZGF0YUNhY2hlLCBtYXNrUGF0dGVybik7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm46IGZ1bmN0aW9uIChyb3csIGNvbCkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCByID0gLTE7IHIgPD0gNzsgcisrKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocm93ICsgciA8PSAtMSB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IHJvdyArIHIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IC0xOyBjIDw9IDc7IGMrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb2wgKyBjIDw9IC0xIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gY29sICsgYykgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCgwIDw9IHIgJiYgciA8PSA2ICYmIChjID09IDAgfHwgYyA9PSA2KSlcclxuICAgICAgICAgICAgICAgICAgICB8fCAoMCA8PSBjICYmIGMgPD0gNiAmJiAociA9PSAwIHx8IHIgPT0gNikpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgKDIgPD0gciAmJiByIDw9IDQgJiYgMiA8PSBjICYmIGMgPD0gNCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0QmVzdE1hc2tQYXR0ZXJuOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGxldCBtaW5Mb3N0UG9pbnQgPSAwO1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFrZUltcGwodHJ1ZSwgaSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbG9zdFBvaW50ID0gUVJVdGlsLmdldExvc3RQb2ludCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpID09IDAgfHwgbWluTG9zdFBvaW50ID4gbG9zdFBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBtaW5Mb3N0UG9pbnQgPSBsb3N0UG9pbnQ7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZU1vdmllQ2xpcDogZnVuY3Rpb24gKHRhcmdldF9tYywgaW5zdGFuY2VfbmFtZSwgZGVwdGgpIHtcclxuXHJcbiAgICAgICAgbGV0IHFyX21jID0gdGFyZ2V0X21jLmNyZWF0ZUVtcHR5TW92aWVDbGlwKGluc3RhbmNlX25hbWUsIGRlcHRoKTtcclxuICAgICAgICBsZXQgY3MgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLm1ha2UoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5tb2R1bGVzLmxlbmd0aDsgcm93KyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB5ID0gcm93ICogY3M7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLm1vZHVsZXNbcm93XS5sZW5ndGg7IGNvbCsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBjb2wgKiBjcztcclxuICAgICAgICAgICAgICAgIGxldCBkYXJrID0gdGhpcy5tb2R1bGVzW3Jvd11bY29sXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGFyaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHFyX21jLmJlZ2luRmlsbCgwLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHFyX21jLm1vdmVUbyh4LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICBxcl9tYy5saW5lVG8oeCArIGNzLCB5KTtcclxuICAgICAgICAgICAgICAgICAgICBxcl9tYy5saW5lVG8oeCArIGNzLCB5ICsgY3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHFyX21jLmxpbmVUbyh4LCB5ICsgY3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHFyX21jLmVuZEZpbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHFyX21jO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXR1cFRpbWluZ1BhdHRlcm46IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgciA9IDg7IHIgPCB0aGlzLm1vZHVsZUNvdW50IC0gODsgcisrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZHVsZXNbcl1bNl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tb2R1bGVzW3JdWzZdID0gKHIgJSAyID09IDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgYyA9IDg7IGMgPCB0aGlzLm1vZHVsZUNvdW50IC0gODsgYysrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZHVsZXNbNl1bY10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tb2R1bGVzWzZdW2NdID0gKGMgJSAyID09IDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm46IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IFFSVXRpbC5nZXRQYXR0ZXJuUG9zaXRpb24odGhpcy50eXBlTnVtYmVyKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9zLmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IHBvc1tpXTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBwb3Nbal07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9kdWxlc1tyb3ddW2NvbF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHIgPSAtMjsgciA8PSAyOyByKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IC0yOyBjIDw9IDI7IGMrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPT0gLTIgfHwgciA9PSAyIHx8IGMgPT0gLTIgfHwgYyA9PSAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAociA9PSAwICYmIGMgPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2V0dXBUeXBlTnVtYmVyOiBmdW5jdGlvbiAodGVzdCkge1xyXG5cclxuICAgICAgICBsZXQgYml0cyA9IFFSVXRpbC5nZXRCQ0hUeXBlTnVtYmVyKHRoaXMudHlwZU51bWJlcik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbW9kID0gKCF0ZXN0ICYmICgoYml0cyA+PiBpKSAmIDEpID09IDEpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZXNbTWF0aC5mbG9vcihpIC8gMyldW2kgJSAzICsgdGhpcy5tb2R1bGVDb3VudCAtIDggLSAzXSA9IG1vZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbW9kID0gKCF0ZXN0ICYmICgoYml0cyA+PiBpKSAmIDEpID09IDEpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZXNbaSAlIDMgKyB0aGlzLm1vZHVsZUNvdW50IC0gOCAtIDNdW01hdGguZmxvb3IoaSAvIDMpXSA9IG1vZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldHVwVHlwZUluZm86IGZ1bmN0aW9uICh0ZXN0LCBtYXNrUGF0dGVybikge1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9ICh0aGlzLmVycm9yQ29ycmVjdExldmVsIDw8IDMpIHwgbWFza1BhdHRlcm47XHJcbiAgICAgICAgbGV0IGJpdHMgPSBRUlV0aWwuZ2V0QkNIVHlwZUluZm8oZGF0YSk7XHJcblxyXG4gICAgICAgIC8vIHZlcnRpY2FsXHRcdFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IG1vZCA9ICghdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpIDwgNikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVzW2ldWzhdID0gbW9kO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbaSArIDFdWzhdID0gbW9kO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQgLSAxNSArIGldWzhdID0gbW9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBob3Jpem9udGFsXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgbW9kID0gKCF0ZXN0ICYmICgoYml0cyA+PiBpKSAmIDEpID09IDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGkgPCA4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXNbOF1bdGhpcy5tb2R1bGVDb3VudCAtIGkgLSAxXSA9IG1vZDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgOSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVzWzhdWzE1IC0gaSAtIDEgKyAxXSA9IG1vZDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlc1s4XVsxNSAtIGkgLSAxXSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZml4ZWQgbW9kdWxlXHJcbiAgICAgICAgdGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQgLSA4XVs4XSA9ICghdGVzdCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBtYXBEYXRhOiBmdW5jdGlvbiAoZGF0YSwgbWFza1BhdHRlcm4pIHtcclxuXHJcbiAgICAgICAgbGV0IGluYyA9IC0xO1xyXG4gICAgICAgIGxldCByb3cgPSB0aGlzLm1vZHVsZUNvdW50IC0gMTtcclxuICAgICAgICBsZXQgYml0SW5kZXggPSA3O1xyXG4gICAgICAgIGxldCBieXRlSW5kZXggPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjb2wgPSB0aGlzLm1vZHVsZUNvdW50IC0gMTsgY29sID4gMDsgY29sIC09IDIpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb2wgPT0gNikgY29sLS07XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMjsgYysrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZHVsZXNbcm93XVtjb2wgLSBjXSA9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGFyayA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ5dGVJbmRleCA8IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrID0gKCgoZGF0YVtieXRlSW5kZXhdID4+PiBiaXRJbmRleCkgJiAxKSA9PSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hc2sgPSBRUlV0aWwuZ2V0TWFzayhtYXNrUGF0dGVybiwgcm93LCBjb2wgLSBjKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrID0gIWRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlc1tyb3ddW2NvbCAtIGNdID0gZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYml0SW5kZXgtLTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiaXRJbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaXRJbmRleCA9IDc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcm93ICs9IGluYztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocm93IDwgMCB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdyAtPSBpbmM7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5jID0gLWluYztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuUVJDb2RlLlBBRDAgPSAweEVDO1xyXG5RUkNvZGUuUEFEMSA9IDB4MTE7XHJcblxyXG5RUkNvZGUuY3JlYXRlRGF0YSA9IGZ1bmN0aW9uICh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCwgZGF0YUxpc3QpIHtcclxuXHJcbiAgICBsZXQgcnNCbG9ja3MgPSBRUlJTQmxvY2suZ2V0UlNCbG9ja3ModHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG5cclxuICAgIGxldCBidWZmZXIgPSBuZXcgUVJCaXRCdWZmZXIoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBkYXRhTGlzdFtpXTtcclxuICAgICAgICBidWZmZXIucHV0KGRhdGEubW9kZSwgNCk7XHJcbiAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBRUlV0aWwuZ2V0TGVuZ3RoSW5CaXRzKGRhdGEubW9kZSwgdHlwZU51bWJlcikpO1xyXG4gICAgICAgIGRhdGEud3JpdGUoYnVmZmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxjIG51bSBtYXggZGF0YS5cclxuICAgIGxldCB0b3RhbERhdGFDb3VudCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdG90YWxEYXRhQ291bnQgKz0gcnNCbG9ja3NbaV0uZGF0YUNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPiB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb2RlIGxlbmd0aCBvdmVyZmxvdy4gKFwiXHJcbiAgICAgICAgICAgICsgYnVmZmVyLmdldExlbmd0aEluQml0cygpXHJcbiAgICAgICAgICAgICsgXCI+XCJcclxuICAgICAgICAgICAgKyB0b3RhbERhdGFDb3VudCAqIDhcclxuICAgICAgICAgICAgKyBcIilcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZW5kIGNvZGVcclxuICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgKyA0IDw9IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG4gICAgICAgIGJ1ZmZlci5wdXQoMCwgNCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcGFkZGluZ1xyXG4gICAgd2hpbGUgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSAlIDggIT0gMCkge1xyXG4gICAgICAgIGJ1ZmZlci5wdXRCaXQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBhZGRpbmdcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcblxyXG4gICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPj0gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWZmZXIucHV0KFFSQ29kZS5QQUQwLCA4KTtcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1ZmZlci5wdXQoUVJDb2RlLlBBRDEsIDgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBRUkNvZGUuY3JlYXRlQnl0ZXMoYnVmZmVyLCByc0Jsb2Nrcyk7XHJcbn1cclxuXHJcblFSQ29kZS5jcmVhdGVCeXRlcyA9IGZ1bmN0aW9uIChidWZmZXIsIHJzQmxvY2tzKSB7XHJcblxyXG4gICAgbGV0IG9mZnNldCA9IDA7XHJcblxyXG4gICAgbGV0IG1heERjQ291bnQgPSAwO1xyXG4gICAgbGV0IG1heEVjQ291bnQgPSAwO1xyXG5cclxuICAgIGxldCBkY2RhdGEgPSBuZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtcclxuICAgIGxldCBlY2RhdGEgPSBuZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtcclxuXHJcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XHJcblxyXG4gICAgICAgIGxldCBkY0NvdW50ID0gcnNCbG9ja3Nbcl0uZGF0YUNvdW50O1xyXG4gICAgICAgIGxldCBlY0NvdW50ID0gcnNCbG9ja3Nbcl0udG90YWxDb3VudCAtIGRjQ291bnQ7XHJcblxyXG4gICAgICAgIG1heERjQ291bnQgPSBNYXRoLm1heChtYXhEY0NvdW50LCBkY0NvdW50KTtcclxuICAgICAgICBtYXhFY0NvdW50ID0gTWF0aC5tYXgobWF4RWNDb3VudCwgZWNDb3VudCk7XHJcblxyXG4gICAgICAgIGRjZGF0YVtyXSA9IG5ldyBBcnJheShkY0NvdW50KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkY2RhdGFbcl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZGNkYXRhW3JdW2ldID0gMHhmZiAmIGJ1ZmZlci5idWZmZXJbaSArIG9mZnNldF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9mZnNldCArPSBkY0NvdW50O1xyXG5cclxuICAgICAgICBsZXQgcnNQb2x5ID0gUVJVdGlsLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZWNDb3VudCk7XHJcbiAgICAgICAgbGV0IHJhd1BvbHkgPSBuZXcgUVJQb2x5bm9taWFsKGRjZGF0YVtyXSwgcnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XHJcblxyXG4gICAgICAgIGxldCBtb2RQb2x5ID0gcmF3UG9seS5tb2QocnNQb2x5KTtcclxuICAgICAgICBlY2RhdGFbcl0gPSBuZXcgQXJyYXkocnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlY2RhdGFbcl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1vZEluZGV4ID0gaSArIG1vZFBvbHkuZ2V0TGVuZ3RoKCkgLSBlY2RhdGFbcl0ubGVuZ3RoO1xyXG4gICAgICAgICAgICBlY2RhdGFbcl1baV0gPSAobW9kSW5kZXggPj0gMCkgPyBtb2RQb2x5LmdldChtb2RJbmRleCkgOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRvdGFsQ29kZUNvdW50ID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0b3RhbENvZGVDb3VudCArPSByc0Jsb2Nrc1tpXS50b3RhbENvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkYXRhID0gbmV3IEFycmF5KHRvdGFsQ29kZUNvdW50KTtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhEY0NvdW50OyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgIGlmIChpIDwgZGNkYXRhW3JdLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtpbmRleCsrXSA9IGRjZGF0YVtyXVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heEVjQ291bnQ7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPCBlY2RhdGFbcl0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2luZGV4KytdID0gZWNkYXRhW3JdW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG5cclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUVJNb2RlXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5sZXQgUVJNb2RlID0ge1xyXG4gICAgTU9ERV9OVU1CRVI6IDEgPDwgMCxcclxuICAgIE1PREVfQUxQSEFfTlVNOiAxIDw8IDEsXHJcbiAgICBNT0RFXzhCSVRfQllURTogMSA8PCAyLFxyXG4gICAgTU9ERV9LQU5KSTogMSA8PCAzXHJcbn07XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUkVycm9yQ29ycmVjdExldmVsXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5sZXQgUVJFcnJvckNvcnJlY3RMZXZlbCA9IHtcclxuICAgIEw6IDEsXHJcbiAgICBNOiAwLFxyXG4gICAgUTogMyxcclxuICAgIEg6IDJcclxufTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSTWFza1BhdHRlcm5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBRUk1hc2tQYXR0ZXJuID0ge1xyXG4gICAgUEFUVEVSTjAwMDogMCxcclxuICAgIFBBVFRFUk4wMDE6IDEsXHJcbiAgICBQQVRURVJOMDEwOiAyLFxyXG4gICAgUEFUVEVSTjAxMTogMyxcclxuICAgIFBBVFRFUk4xMDA6IDQsXHJcbiAgICBQQVRURVJOMTAxOiA1LFxyXG4gICAgUEFUVEVSTjExMDogNixcclxuICAgIFBBVFRFUk4xMTE6IDdcclxufTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSVXRpbFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IFFSVXRpbCA9IHtcclxuXHJcbiAgICBQQVRURVJOX1BPU0lUSU9OX1RBQkxFOiBbXHJcbiAgICAgICAgW10sXHJcbiAgICAgICAgWzYsIDE4XSxcclxuICAgICAgICBbNiwgMjJdLFxyXG4gICAgICAgIFs2LCAyNl0sXHJcbiAgICAgICAgWzYsIDMwXSxcclxuICAgICAgICBbNiwgMzRdLFxyXG4gICAgICAgIFs2LCAyMiwgMzhdLFxyXG4gICAgICAgIFs2LCAyNCwgNDJdLFxyXG4gICAgICAgIFs2LCAyNiwgNDZdLFxyXG4gICAgICAgIFs2LCAyOCwgNTBdLFxyXG4gICAgICAgIFs2LCAzMCwgNTRdLFxyXG4gICAgICAgIFs2LCAzMiwgNThdLFxyXG4gICAgICAgIFs2LCAzNCwgNjJdLFxyXG4gICAgICAgIFs2LCAyNiwgNDYsIDY2XSxcclxuICAgICAgICBbNiwgMjYsIDQ4LCA3MF0sXHJcbiAgICAgICAgWzYsIDI2LCA1MCwgNzRdLFxyXG4gICAgICAgIFs2LCAzMCwgNTQsIDc4XSxcclxuICAgICAgICBbNiwgMzAsIDU2LCA4Ml0sXHJcbiAgICAgICAgWzYsIDMwLCA1OCwgODZdLFxyXG4gICAgICAgIFs2LCAzNCwgNjIsIDkwXSxcclxuICAgICAgICBbNiwgMjgsIDUwLCA3MiwgOTRdLFxyXG4gICAgICAgIFs2LCAyNiwgNTAsIDc0LCA5OF0sXHJcbiAgICAgICAgWzYsIDMwLCA1NCwgNzgsIDEwMl0sXHJcbiAgICAgICAgWzYsIDI4LCA1NCwgODAsIDEwNl0sXHJcbiAgICAgICAgWzYsIDMyLCA1OCwgODQsIDExMF0sXHJcbiAgICAgICAgWzYsIDMwLCA1OCwgODYsIDExNF0sXHJcbiAgICAgICAgWzYsIDM0LCA2MiwgOTAsIDExOF0sXHJcbiAgICAgICAgWzYsIDI2LCA1MCwgNzQsIDk4LCAxMjJdLFxyXG4gICAgICAgIFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNl0sXHJcbiAgICAgICAgWzYsIDI2LCA1MiwgNzgsIDEwNCwgMTMwXSxcclxuICAgICAgICBbNiwgMzAsIDU2LCA4MiwgMTA4LCAxMzRdLFxyXG4gICAgICAgIFs2LCAzNCwgNjAsIDg2LCAxMTIsIDEzOF0sXHJcbiAgICAgICAgWzYsIDMwLCA1OCwgODYsIDExNCwgMTQyXSxcclxuICAgICAgICBbNiwgMzQsIDYyLCA5MCwgMTE4LCAxNDZdLFxyXG4gICAgICAgIFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNiwgMTUwXSxcclxuICAgICAgICBbNiwgMjQsIDUwLCA3NiwgMTAyLCAxMjgsIDE1NF0sXHJcbiAgICAgICAgWzYsIDI4LCA1NCwgODAsIDEwNiwgMTMyLCAxNThdLFxyXG4gICAgICAgIFs2LCAzMiwgNTgsIDg0LCAxMTAsIDEzNiwgMTYyXSxcclxuICAgICAgICBbNiwgMjYsIDU0LCA4MiwgMTEwLCAxMzgsIDE2Nl0sXHJcbiAgICAgICAgWzYsIDMwLCA1OCwgODYsIDExNCwgMTQyLCAxNzBdXHJcbiAgICBdLFxyXG5cclxuICAgIEcxNTogKDEgPDwgMTApIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDQpIHwgKDEgPDwgMikgfCAoMSA8PCAxKSB8ICgxIDw8IDApLFxyXG4gICAgRzE4OiAoMSA8PCAxMikgfCAoMSA8PCAxMSkgfCAoMSA8PCAxMCkgfCAoMSA8PCA5KSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCAyKSB8ICgxIDw8IDApLFxyXG4gICAgRzE1X01BU0s6ICgxIDw8IDE0KSB8ICgxIDw8IDEyKSB8ICgxIDw8IDEwKSB8ICgxIDw8IDQpIHwgKDEgPDwgMSksXHJcblxyXG4gICAgZ2V0QkNIVHlwZUluZm86IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgbGV0IGQgPSBkYXRhIDw8IDEwO1xyXG4gICAgICAgIHdoaWxlIChRUlV0aWwuZ2V0QkNIRGlnaXQoZCkgLSBRUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxNSkgPj0gMCkge1xyXG4gICAgICAgICAgICBkIF49IChRUlV0aWwuRzE1IDw8IChRUlV0aWwuZ2V0QkNIRGlnaXQoZCkgLSBRUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxNSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgoZGF0YSA8PCAxMCkgfCBkKSBeIFFSVXRpbC5HMTVfTUFTSztcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0QkNIVHlwZU51bWJlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBsZXQgZCA9IGRhdGEgPDwgMTI7XHJcbiAgICAgICAgd2hpbGUgKFFSVXRpbC5nZXRCQ0hEaWdpdChkKSAtIFFSVXRpbC5nZXRCQ0hEaWdpdChRUlV0aWwuRzE4KSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGQgXj0gKFFSVXRpbC5HMTggPDwgKFFSVXRpbC5nZXRCQ0hEaWdpdChkKSAtIFFSVXRpbC5nZXRCQ0hEaWdpdChRUlV0aWwuRzE4KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGRhdGEgPDwgMTIpIHwgZDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0QkNIRGlnaXQ6IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgIGxldCBkaWdpdCA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlIChkYXRhICE9IDApIHtcclxuICAgICAgICAgICAgZGlnaXQrKztcclxuICAgICAgICAgICAgZGF0YSA+Pj49IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGlnaXQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFBhdHRlcm5Qb3NpdGlvbjogZnVuY3Rpb24gKHR5cGVOdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gUVJVdGlsLlBBVFRFUk5fUE9TSVRJT05fVEFCTEVbdHlwZU51bWJlciAtIDFdO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRNYXNrOiBmdW5jdGlvbiAobWFza1BhdHRlcm4sIGksIGopIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChtYXNrUGF0dGVybikge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDA6IHJldHVybiAoaSArIGopICUgMiA9PSAwO1xyXG4gICAgICAgICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMTogcmV0dXJuIGkgJSAyID09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDEwOiByZXR1cm4gaiAlIDMgPT0gMDtcclxuICAgICAgICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTE6IHJldHVybiAoaSArIGopICUgMyA9PSAwO1xyXG4gICAgICAgICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMDogcmV0dXJuIChNYXRoLmZsb29yKGkgLyAyKSArIE1hdGguZmxvb3IoaiAvIDMpKSAlIDIgPT0gMDtcclxuICAgICAgICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDE6IHJldHVybiAoaSAqIGopICUgMiArIChpICogaikgJSAzID09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTEwOiByZXR1cm4gKChpICogaikgJSAyICsgKGkgKiBqKSAlIDMpICUgMiA9PSAwO1xyXG4gICAgICAgICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjExMTogcmV0dXJuICgoaSAqIGopICUgMyArIChpICsgaikgJSAyKSAlIDIgPT0gMDtcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYWQgbWFza1BhdHRlcm46XCIgKyBtYXNrUGF0dGVybik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsOiBmdW5jdGlvbiAoZXJyb3JDb3JyZWN0TGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIGxldCBhID0gbmV3IFFSUG9seW5vbWlhbChbMV0sIDApO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVycm9yQ29ycmVjdExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGEgPSBhLm11bHRpcGx5KG5ldyBRUlBvbHlub21pYWwoWzEsIFFSTWF0aC5nZXhwKGkpXSwgMCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldExlbmd0aEluQml0czogZnVuY3Rpb24gKG1vZGUsIHR5cGUpIHtcclxuXHJcbiAgICAgICAgaWYgKDEgPD0gdHlwZSAmJiB0eXBlIDwgMTApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIDEgLSA5XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSOiByZXR1cm4gMTA7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTTogcmV0dXJuIDk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURTogcmV0dXJuIDg7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0tBTkpJOiByZXR1cm4gODtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIiArIG1vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA8IDI3KSB7XHJcblxyXG4gICAgICAgICAgICAvLyAxMCAtIDI2XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSOiByZXR1cm4gMTI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTTogcmV0dXJuIDExO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV84QklUX0JZVEU6IHJldHVybiAxNjtcclxuICAgICAgICAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfS0FOSkk6IHJldHVybiAxMDtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIiArIG1vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA8IDQxKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAyNyAtIDQwXHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSOiByZXR1cm4gMTQ7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTTogcmV0dXJuIDEzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV84QklUX0JZVEU6IHJldHVybiAxNjtcclxuICAgICAgICAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfS0FOSkk6IHJldHVybiAxMjtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIiArIG1vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInR5cGU6XCIgKyB0eXBlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldExvc3RQb2ludDogZnVuY3Rpb24gKHFyQ29kZSkge1xyXG5cclxuICAgICAgICBsZXQgbW9kdWxlQ291bnQgPSBxckNvZGUuZ2V0TW9kdWxlQ291bnQoKTtcclxuXHJcbiAgICAgICAgbGV0IGxvc3RQb2ludCA9IDA7XHJcblxyXG4gICAgICAgIC8vIExFVkVMMVxyXG5cclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzYW1lQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhcmsgPSBxckNvZGUuaXNEYXJrKHJvdywgY29sKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByID0gLTE7IHIgPD0gMTsgcisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3cgKyByIDwgMCB8fCBtb2R1bGVDb3VudCA8PSByb3cgKyByKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IC0xOyBjIDw9IDE7IGMrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCArIGMgPCAwIHx8IG1vZHVsZUNvdW50IDw9IGNvbCArIGMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9PSAwICYmIGMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXJrID09IHFyQ29kZS5pc0Rhcmsocm93ICsgciwgY29sICsgYykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzYW1lQ291bnQgPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9ICgzICsgc2FtZUNvdW50IC0gNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExFVkVMMlxyXG5cclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDE7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gMTsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAocXJDb2RlLmlzRGFyayhyb3csIGNvbCkpIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAocXJDb2RlLmlzRGFyayhyb3cgKyAxLCBjb2wpKSBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyAxKSkgY291bnQrKztcclxuICAgICAgICAgICAgICAgIGlmIChxckNvZGUuaXNEYXJrKHJvdyArIDEsIGNvbCArIDEpKSBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09IDAgfHwgY291bnQgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvc3RQb2ludCArPSAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMRVZFTDNcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gNjsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChxckNvZGUuaXNEYXJrKHJvdywgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmICFxckNvZGUuaXNEYXJrKHJvdywgY29sICsgMSlcclxuICAgICAgICAgICAgICAgICAgICAmJiBxckNvZGUuaXNEYXJrKHJvdywgY29sICsgMilcclxuICAgICAgICAgICAgICAgICAgICAmJiBxckNvZGUuaXNEYXJrKHJvdywgY29sICsgMylcclxuICAgICAgICAgICAgICAgICAgICAmJiBxckNvZGUuaXNEYXJrKHJvdywgY29sICsgNClcclxuICAgICAgICAgICAgICAgICAgICAmJiAhcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9IDQwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQgLSA2OyByb3crKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93LCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIXFyQ29kZS5pc0Rhcmsocm93ICsgMSwgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHFyQ29kZS5pc0Rhcmsocm93ICsgMiwgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHFyQ29kZS5pc0Rhcmsocm93ICsgMywgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHFyQ29kZS5pc0Rhcmsocm93ICsgNCwgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmICFxckNvZGUuaXNEYXJrKHJvdyArIDUsIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiBxckNvZGUuaXNEYXJrKHJvdyArIDYsIGNvbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gNDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExFVkVMNFxyXG5cclxuICAgICAgICBsZXQgZGFya0NvdW50ID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3crKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93LCBjb2wpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGFya0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByYXRpbyA9IE1hdGguYWJzKDEwMCAqIGRhcmtDb3VudCAvIG1vZHVsZUNvdW50IC8gbW9kdWxlQ291bnQgLSA1MCkgLyA1O1xyXG4gICAgICAgIGxvc3RQb2ludCArPSByYXRpbyAqIDEwO1xyXG5cclxuICAgICAgICByZXR1cm4gbG9zdFBvaW50O1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUk1hdGhcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBRUk1hdGggPSB7XHJcblxyXG4gICAgZ2xvZzogZnVuY3Rpb24gKG4pIHtcclxuXHJcbiAgICAgICAgaWYgKG4gPCAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdsb2coXCIgKyBuICsgXCIpXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFFSTWF0aC5MT0dfVEFCTEVbbl07XHJcbiAgICB9LFxyXG5cclxuICAgIGdleHA6IGZ1bmN0aW9uIChuKSB7XHJcblxyXG4gICAgICAgIHdoaWxlIChuIDwgMCkge1xyXG4gICAgICAgICAgICBuICs9IDI1NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChuID49IDI1Nikge1xyXG4gICAgICAgICAgICBuIC09IDI1NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBRUk1hdGguRVhQX1RBQkxFW25dO1xyXG4gICAgfSxcclxuXHJcbiAgICBFWFBfVEFCTEU6IG5ldyBBcnJheSgyNTYpLFxyXG5cclxuICAgIExPR19UQUJMRTogbmV3IEFycmF5KDI1NilcclxuXHJcbn07XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgUVJNYXRoLkVYUF9UQUJMRVtpXSA9IDEgPDwgaTtcclxufVxyXG5mb3IgKGxldCBpID0gODsgaSA8IDI1NjsgaSsrKSB7XHJcbiAgICBRUk1hdGguRVhQX1RBQkxFW2ldID0gUVJNYXRoLkVYUF9UQUJMRVtpIC0gNF1cclxuICAgICAgICBeIFFSTWF0aC5FWFBfVEFCTEVbaSAtIDVdXHJcbiAgICAgICAgXiBRUk1hdGguRVhQX1RBQkxFW2kgLSA2XVxyXG4gICAgICAgIF4gUVJNYXRoLkVYUF9UQUJMRVtpIC0gOF07XHJcbn1cclxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTU7IGkrKykge1xyXG4gICAgUVJNYXRoLkxPR19UQUJMRVtRUk1hdGguRVhQX1RBQkxFW2ldXSA9IGk7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSUG9seW5vbWlhbFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gUVJQb2x5bm9taWFsKG51bSwgc2hpZnQpIHtcclxuXHJcbiAgICBpZiAobnVtLmxlbmd0aCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobnVtLmxlbmd0aCArIFwiL1wiICsgc2hpZnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBvZmZzZXQgPSAwO1xyXG5cclxuICAgIHdoaWxlIChvZmZzZXQgPCBudW0ubGVuZ3RoICYmIG51bVtvZmZzZXRdID09IDApIHtcclxuICAgICAgICBvZmZzZXQrKztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm51bSA9IG5ldyBBcnJheShudW0ubGVuZ3RoIC0gb2Zmc2V0ICsgc2hpZnQpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW0ubGVuZ3RoIC0gb2Zmc2V0OyBpKyspIHtcclxuICAgICAgICB0aGlzLm51bVtpXSA9IG51bVtpICsgb2Zmc2V0XTtcclxuICAgIH1cclxufVxyXG5cclxuUVJQb2x5bm9taWFsLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bVtpbmRleF07XHJcbiAgICB9LFxyXG5cclxuICAgIGdldExlbmd0aDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bS5sZW5ndGg7XHJcbiAgICB9LFxyXG5cclxuICAgIG11bHRpcGx5OiBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICBsZXQgbnVtID0gbmV3IEFycmF5KHRoaXMuZ2V0TGVuZ3RoKCkgKyBlLmdldExlbmd0aCgpIC0gMSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZS5nZXRMZW5ndGgoKTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBudW1baSArIGpdIF49IFFSTWF0aC5nZXhwKFFSTWF0aC5nbG9nKHRoaXMuZ2V0KGkpKSArIFFSTWF0aC5nbG9nKGUuZ2V0KGopKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUVJQb2x5bm9taWFsKG51bSwgMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG1vZDogZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TGVuZ3RoKCkgLSBlLmdldExlbmd0aCgpIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByYXRpbyA9IFFSTWF0aC5nbG9nKHRoaXMuZ2V0KDApKSAtIFFSTWF0aC5nbG9nKGUuZ2V0KDApKTtcclxuXHJcbiAgICAgICAgbGV0IG51bSA9IG5ldyBBcnJheSh0aGlzLmdldExlbmd0aCgpKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtW2ldID0gdGhpcy5nZXQoaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBudW1baV0gXj0gUVJNYXRoLmdleHAoUVJNYXRoLmdsb2coZS5nZXQoaSkpICsgcmF0aW8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVjdXJzaXZlIGNhbGxcclxuICAgICAgICByZXR1cm4gbmV3IFFSUG9seW5vbWlhbChudW0sIDApLm1vZChlKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSUlNCbG9ja1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gUVJSU0Jsb2NrKHRvdGFsQ291bnQsIGRhdGFDb3VudCkge1xyXG4gICAgdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcclxuICAgIHRoaXMuZGF0YUNvdW50ID0gZGF0YUNvdW50O1xyXG59XHJcblxyXG5RUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEUgPSBbXHJcblxyXG4gICAgLy8gTFxyXG4gICAgLy8gTVxyXG4gICAgLy8gUVxyXG4gICAgLy8gSFxyXG5cclxuICAgIC8vIDFcclxuICAgIFsxLCAyNiwgMTldLFxyXG4gICAgWzEsIDI2LCAxNl0sXHJcbiAgICBbMSwgMjYsIDEzXSxcclxuICAgIFsxLCAyNiwgOV0sXHJcblxyXG4gICAgLy8gMlxyXG4gICAgWzEsIDQ0LCAzNF0sXHJcbiAgICBbMSwgNDQsIDI4XSxcclxuICAgIFsxLCA0NCwgMjJdLFxyXG4gICAgWzEsIDQ0LCAxNl0sXHJcblxyXG4gICAgLy8gM1xyXG4gICAgWzEsIDcwLCA1NV0sXHJcbiAgICBbMSwgNzAsIDQ0XSxcclxuICAgIFsyLCAzNSwgMTddLFxyXG4gICAgWzIsIDM1LCAxM10sXHJcblxyXG4gICAgLy8gNFx0XHRcclxuICAgIFsxLCAxMDAsIDgwXSxcclxuICAgIFsyLCA1MCwgMzJdLFxyXG4gICAgWzIsIDUwLCAyNF0sXHJcbiAgICBbNCwgMjUsIDldLFxyXG5cclxuICAgIC8vIDVcclxuICAgIFsxLCAxMzQsIDEwOF0sXHJcbiAgICBbMiwgNjcsIDQzXSxcclxuICAgIFsyLCAzMywgMTUsIDIsIDM0LCAxNl0sXHJcbiAgICBbMiwgMzMsIDExLCAyLCAzNCwgMTJdLFxyXG5cclxuICAgIC8vIDZcclxuICAgIFsyLCA4NiwgNjhdLFxyXG4gICAgWzQsIDQzLCAyN10sXHJcbiAgICBbNCwgNDMsIDE5XSxcclxuICAgIFs0LCA0MywgMTVdLFxyXG5cclxuICAgIC8vIDdcdFx0XHJcbiAgICBbMiwgOTgsIDc4XSxcclxuICAgIFs0LCA0OSwgMzFdLFxyXG4gICAgWzIsIDMyLCAxNCwgNCwgMzMsIDE1XSxcclxuICAgIFs0LCAzOSwgMTMsIDEsIDQwLCAxNF0sXHJcblxyXG4gICAgLy8gOFxyXG4gICAgWzIsIDEyMSwgOTddLFxyXG4gICAgWzIsIDYwLCAzOCwgMiwgNjEsIDM5XSxcclxuICAgIFs0LCA0MCwgMTgsIDIsIDQxLCAxOV0sXHJcbiAgICBbNCwgNDAsIDE0LCAyLCA0MSwgMTVdLFxyXG5cclxuICAgIC8vIDlcclxuICAgIFsyLCAxNDYsIDExNl0sXHJcbiAgICBbMywgNTgsIDM2LCAyLCA1OSwgMzddLFxyXG4gICAgWzQsIDM2LCAxNiwgNCwgMzcsIDE3XSxcclxuICAgIFs0LCAzNiwgMTIsIDQsIDM3LCAxM10sXHJcblxyXG4gICAgLy8gMTBcdFx0XHJcbiAgICBbMiwgODYsIDY4LCAyLCA4NywgNjldLFxyXG4gICAgWzQsIDY5LCA0MywgMSwgNzAsIDQ0XSxcclxuICAgIFs2LCA0MywgMTksIDIsIDQ0LCAyMF0sXHJcbiAgICBbNiwgNDMsIDE1LCAyLCA0NCwgMTZdLFxyXG5cclxuICAgIC8vIDExXHJcbiAgICBbNCwgMTAxLCA4MV0sXHJcbiAgICBbMSwgODAsIDUwLCA0LCA4MSwgNTFdLFxyXG4gICAgWzQsIDUwLCAyMiwgNCwgNTEsIDIzXSxcclxuICAgIFszLCAzNiwgMTIsIDgsIDM3LCAxM10sXHJcblxyXG4gICAgLy8gMTJcclxuICAgIFsyLCAxMTYsIDkyLCAyLCAxMTcsIDkzXSxcclxuICAgIFs2LCA1OCwgMzYsIDIsIDU5LCAzN10sXHJcbiAgICBbNCwgNDYsIDIwLCA2LCA0NywgMjFdLFxyXG4gICAgWzcsIDQyLCAxNCwgNCwgNDMsIDE1XSxcclxuXHJcbiAgICAvLyAxM1xyXG4gICAgWzQsIDEzMywgMTA3XSxcclxuICAgIFs4LCA1OSwgMzcsIDEsIDYwLCAzOF0sXHJcbiAgICBbOCwgNDQsIDIwLCA0LCA0NSwgMjFdLFxyXG4gICAgWzEyLCAzMywgMTEsIDQsIDM0LCAxMl0sXHJcblxyXG4gICAgLy8gMTRcclxuICAgIFszLCAxNDUsIDExNSwgMSwgMTQ2LCAxMTZdLFxyXG4gICAgWzQsIDY0LCA0MCwgNSwgNjUsIDQxXSxcclxuICAgIFsxMSwgMzYsIDE2LCA1LCAzNywgMTddLFxyXG4gICAgWzExLCAzNiwgMTIsIDUsIDM3LCAxM10sXHJcblxyXG4gICAgLy8gMTVcclxuICAgIFs1LCAxMDksIDg3LCAxLCAxMTAsIDg4XSxcclxuICAgIFs1LCA2NSwgNDEsIDUsIDY2LCA0Ml0sXHJcbiAgICBbNSwgNTQsIDI0LCA3LCA1NSwgMjVdLFxyXG4gICAgWzExLCAzNiwgMTJdLFxyXG5cclxuICAgIC8vIDE2XHJcbiAgICBbNSwgMTIyLCA5OCwgMSwgMTIzLCA5OV0sXHJcbiAgICBbNywgNzMsIDQ1LCAzLCA3NCwgNDZdLFxyXG4gICAgWzE1LCA0MywgMTksIDIsIDQ0LCAyMF0sXHJcbiAgICBbMywgNDUsIDE1LCAxMywgNDYsIDE2XSxcclxuXHJcbiAgICAvLyAxN1xyXG4gICAgWzEsIDEzNSwgMTA3LCA1LCAxMzYsIDEwOF0sXHJcbiAgICBbMTAsIDc0LCA0NiwgMSwgNzUsIDQ3XSxcclxuICAgIFsxLCA1MCwgMjIsIDE1LCA1MSwgMjNdLFxyXG4gICAgWzIsIDQyLCAxNCwgMTcsIDQzLCAxNV0sXHJcblxyXG4gICAgLy8gMThcclxuICAgIFs1LCAxNTAsIDEyMCwgMSwgMTUxLCAxMjFdLFxyXG4gICAgWzksIDY5LCA0MywgNCwgNzAsIDQ0XSxcclxuICAgIFsxNywgNTAsIDIyLCAxLCA1MSwgMjNdLFxyXG4gICAgWzIsIDQyLCAxNCwgMTksIDQzLCAxNV0sXHJcblxyXG4gICAgLy8gMTlcclxuICAgIFszLCAxNDEsIDExMywgNCwgMTQyLCAxMTRdLFxyXG4gICAgWzMsIDcwLCA0NCwgMTEsIDcxLCA0NV0sXHJcbiAgICBbMTcsIDQ3LCAyMSwgNCwgNDgsIDIyXSxcclxuICAgIFs5LCAzOSwgMTMsIDE2LCA0MCwgMTRdLFxyXG5cclxuICAgIC8vIDIwXHJcbiAgICBbMywgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcclxuICAgIFszLCA2NywgNDEsIDEzLCA2OCwgNDJdLFxyXG4gICAgWzE1LCA1NCwgMjQsIDUsIDU1LCAyNV0sXHJcbiAgICBbMTUsIDQzLCAxNSwgMTAsIDQ0LCAxNl0sXHJcblxyXG4gICAgLy8gMjFcclxuICAgIFs0LCAxNDQsIDExNiwgNCwgMTQ1LCAxMTddLFxyXG4gICAgWzE3LCA2OCwgNDJdLFxyXG4gICAgWzE3LCA1MCwgMjIsIDYsIDUxLCAyM10sXHJcbiAgICBbMTksIDQ2LCAxNiwgNiwgNDcsIDE3XSxcclxuXHJcbiAgICAvLyAyMlxyXG4gICAgWzIsIDEzOSwgMTExLCA3LCAxNDAsIDExMl0sXHJcbiAgICBbMTcsIDc0LCA0Nl0sXHJcbiAgICBbNywgNTQsIDI0LCAxNiwgNTUsIDI1XSxcclxuICAgIFszNCwgMzcsIDEzXSxcclxuXHJcbiAgICAvLyAyM1xyXG4gICAgWzQsIDE1MSwgMTIxLCA1LCAxNTIsIDEyMl0sXHJcbiAgICBbNCwgNzUsIDQ3LCAxNCwgNzYsIDQ4XSxcclxuICAgIFsxMSwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcclxuICAgIFsxNiwgNDUsIDE1LCAxNCwgNDYsIDE2XSxcclxuXHJcbiAgICAvLyAyNFxyXG4gICAgWzYsIDE0NywgMTE3LCA0LCAxNDgsIDExOF0sXHJcbiAgICBbNiwgNzMsIDQ1LCAxNCwgNzQsIDQ2XSxcclxuICAgIFsxMSwgNTQsIDI0LCAxNiwgNTUsIDI1XSxcclxuICAgIFszMCwgNDYsIDE2LCAyLCA0NywgMTddLFxyXG5cclxuICAgIC8vIDI1XHJcbiAgICBbOCwgMTMyLCAxMDYsIDQsIDEzMywgMTA3XSxcclxuICAgIFs4LCA3NSwgNDcsIDEzLCA3NiwgNDhdLFxyXG4gICAgWzcsIDU0LCAyNCwgMjIsIDU1LCAyNV0sXHJcbiAgICBbMjIsIDQ1LCAxNSwgMTMsIDQ2LCAxNl0sXHJcblxyXG4gICAgLy8gMjZcclxuICAgIFsxMCwgMTQyLCAxMTQsIDIsIDE0MywgMTE1XSxcclxuICAgIFsxOSwgNzQsIDQ2LCA0LCA3NSwgNDddLFxyXG4gICAgWzI4LCA1MCwgMjIsIDYsIDUxLCAyM10sXHJcbiAgICBbMzMsIDQ2LCAxNiwgNCwgNDcsIDE3XSxcclxuXHJcbiAgICAvLyAyN1xyXG4gICAgWzgsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXHJcbiAgICBbMjIsIDczLCA0NSwgMywgNzQsIDQ2XSxcclxuICAgIFs4LCA1MywgMjMsIDI2LCA1NCwgMjRdLFxyXG4gICAgWzEyLCA0NSwgMTUsIDI4LCA0NiwgMTZdLFxyXG5cclxuICAgIC8vIDI4XHJcbiAgICBbMywgMTQ3LCAxMTcsIDEwLCAxNDgsIDExOF0sXHJcbiAgICBbMywgNzMsIDQ1LCAyMywgNzQsIDQ2XSxcclxuICAgIFs0LCA1NCwgMjQsIDMxLCA1NSwgMjVdLFxyXG4gICAgWzExLCA0NSwgMTUsIDMxLCA0NiwgMTZdLFxyXG5cclxuICAgIC8vIDI5XHJcbiAgICBbNywgMTQ2LCAxMTYsIDcsIDE0NywgMTE3XSxcclxuICAgIFsyMSwgNzMsIDQ1LCA3LCA3NCwgNDZdLFxyXG4gICAgWzEsIDUzLCAyMywgMzcsIDU0LCAyNF0sXHJcbiAgICBbMTksIDQ1LCAxNSwgMjYsIDQ2LCAxNl0sXHJcblxyXG4gICAgLy8gMzBcclxuICAgIFs1LCAxNDUsIDExNSwgMTAsIDE0NiwgMTE2XSxcclxuICAgIFsxOSwgNzUsIDQ3LCAxMCwgNzYsIDQ4XSxcclxuICAgIFsxNSwgNTQsIDI0LCAyNSwgNTUsIDI1XSxcclxuICAgIFsyMywgNDUsIDE1LCAyNSwgNDYsIDE2XSxcclxuXHJcbiAgICAvLyAzMVxyXG4gICAgWzEzLCAxNDUsIDExNSwgMywgMTQ2LCAxMTZdLFxyXG4gICAgWzIsIDc0LCA0NiwgMjksIDc1LCA0N10sXHJcbiAgICBbNDIsIDU0LCAyNCwgMSwgNTUsIDI1XSxcclxuICAgIFsyMywgNDUsIDE1LCAyOCwgNDYsIDE2XSxcclxuXHJcbiAgICAvLyAzMlxyXG4gICAgWzE3LCAxNDUsIDExNV0sXHJcbiAgICBbMTAsIDc0LCA0NiwgMjMsIDc1LCA0N10sXHJcbiAgICBbMTAsIDU0LCAyNCwgMzUsIDU1LCAyNV0sXHJcbiAgICBbMTksIDQ1LCAxNSwgMzUsIDQ2LCAxNl0sXHJcblxyXG4gICAgLy8gMzNcclxuICAgIFsxNywgMTQ1LCAxMTUsIDEsIDE0NiwgMTE2XSxcclxuICAgIFsxNCwgNzQsIDQ2LCAyMSwgNzUsIDQ3XSxcclxuICAgIFsyOSwgNTQsIDI0LCAxOSwgNTUsIDI1XSxcclxuICAgIFsxMSwgNDUsIDE1LCA0NiwgNDYsIDE2XSxcclxuXHJcbiAgICAvLyAzNFxyXG4gICAgWzEzLCAxNDUsIDExNSwgNiwgMTQ2LCAxMTZdLFxyXG4gICAgWzE0LCA3NCwgNDYsIDIzLCA3NSwgNDddLFxyXG4gICAgWzQ0LCA1NCwgMjQsIDcsIDU1LCAyNV0sXHJcbiAgICBbNTksIDQ2LCAxNiwgMSwgNDcsIDE3XSxcclxuXHJcbiAgICAvLyAzNVxyXG4gICAgWzEyLCAxNTEsIDEyMSwgNywgMTUyLCAxMjJdLFxyXG4gICAgWzEyLCA3NSwgNDcsIDI2LCA3NiwgNDhdLFxyXG4gICAgWzM5LCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxyXG4gICAgWzIyLCA0NSwgMTUsIDQxLCA0NiwgMTZdLFxyXG5cclxuICAgIC8vIDM2XHJcbiAgICBbNiwgMTUxLCAxMjEsIDE0LCAxNTIsIDEyMl0sXHJcbiAgICBbNiwgNzUsIDQ3LCAzNCwgNzYsIDQ4XSxcclxuICAgIFs0NiwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcclxuICAgIFsyLCA0NSwgMTUsIDY0LCA0NiwgMTZdLFxyXG5cclxuICAgIC8vIDM3XHJcbiAgICBbMTcsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXHJcbiAgICBbMjksIDc0LCA0NiwgMTQsIDc1LCA0N10sXHJcbiAgICBbNDksIDU0LCAyNCwgMTAsIDU1LCAyNV0sXHJcbiAgICBbMjQsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXHJcblxyXG4gICAgLy8gMzhcclxuICAgIFs0LCAxNTIsIDEyMiwgMTgsIDE1MywgMTIzXSxcclxuICAgIFsxMywgNzQsIDQ2LCAzMiwgNzUsIDQ3XSxcclxuICAgIFs0OCwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcclxuICAgIFs0MiwgNDUsIDE1LCAzMiwgNDYsIDE2XSxcclxuXHJcbiAgICAvLyAzOVxyXG4gICAgWzIwLCAxNDcsIDExNywgNCwgMTQ4LCAxMThdLFxyXG4gICAgWzQwLCA3NSwgNDcsIDcsIDc2LCA0OF0sXHJcbiAgICBbNDMsIDU0LCAyNCwgMjIsIDU1LCAyNV0sXHJcbiAgICBbMTAsIDQ1LCAxNSwgNjcsIDQ2LCAxNl0sXHJcblxyXG4gICAgLy8gNDBcclxuICAgIFsxOSwgMTQ4LCAxMTgsIDYsIDE0OSwgMTE5XSxcclxuICAgIFsxOCwgNzUsIDQ3LCAzMSwgNzYsIDQ4XSxcclxuICAgIFszNCwgNTQsIDI0LCAzNCwgNTUsIDI1XSxcclxuICAgIFsyMCwgNDUsIDE1LCA2MSwgNDYsIDE2XVxyXG5dO1xyXG5cclxuUVJSU0Jsb2NrLmdldFJTQmxvY2tzID0gZnVuY3Rpb24gKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKSB7XHJcblxyXG4gICAgbGV0IHJzQmxvY2sgPSBRUlJTQmxvY2suZ2V0UnNCbG9ja1RhYmxlKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKTtcclxuXHJcbiAgICBpZiAocnNCbG9jayA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYWQgcnMgYmxvY2sgQCB0eXBlTnVtYmVyOlwiICsgdHlwZU51bWJlciArIFwiL2Vycm9yQ29ycmVjdExldmVsOlwiICsgZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBsZW5ndGggPSByc0Jsb2NrLmxlbmd0aCAvIDM7XHJcblxyXG4gICAgbGV0IGxpc3QgPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIGxldCBjb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAwXTtcclxuICAgICAgICBsZXQgdG90YWxDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAxXTtcclxuICAgICAgICBsZXQgZGF0YUNvdW50ID0gcnNCbG9ja1tpICogMyArIDJdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKG5ldyBRUlJTQmxvY2sodG90YWxDb3VudCwgZGF0YUNvdW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG5RUlJTQmxvY2suZ2V0UnNCbG9ja1RhYmxlID0gZnVuY3Rpb24gKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKSB7XHJcblxyXG4gICAgc3dpdGNoIChlcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gICAgICAgIGNhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5MOlxyXG4gICAgICAgICAgICByZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMF07XHJcbiAgICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdExldmVsLk06XHJcbiAgICAgICAgICAgIHJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAxXTtcclxuICAgICAgICBjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuUTpcclxuICAgICAgICAgICAgcmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDJdO1xyXG4gICAgICAgIGNhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5IOlxyXG4gICAgICAgICAgICByZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgM107XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUVJCaXRCdWZmZXJcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIFFSQml0QnVmZmVyKCkge1xyXG4gICAgdGhpcy5idWZmZXIgPSBuZXcgQXJyYXkoKTtcclxuICAgIHRoaXMubGVuZ3RoID0gMDtcclxufVxyXG5cclxuUVJCaXRCdWZmZXIucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGJ1ZkluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIDgpO1xyXG4gICAgICAgIHJldHVybiAoKHRoaXMuYnVmZmVyW2J1ZkluZGV4XSA+Pj4gKDcgLSBpbmRleCAlIDgpKSAmIDEpID09IDE7XHJcbiAgICB9LFxyXG5cclxuICAgIHB1dDogZnVuY3Rpb24gKG51bSwgbGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnB1dEJpdCgoKG51bSA+Pj4gKGxlbmd0aCAtIGkgLSAxKSkgJiAxKSA9PSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldExlbmd0aEluQml0czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICAgIH0sXHJcblxyXG4gICAgcHV0Qml0OiBmdW5jdGlvbiAoYml0KSB7XHJcblxyXG4gICAgICAgIGxldCBidWZJbmRleCA9IE1hdGguZmxvb3IodGhpcy5sZW5ndGggLyA4KTtcclxuICAgICAgICBpZiAodGhpcy5idWZmZXIubGVuZ3RoIDw9IGJ1ZkluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLnB1c2goMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyW2J1ZkluZGV4XSB8PSAoMHg4MCA+Pj4gKHRoaXMubGVuZ3RoICUgOCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sZW5ndGgrKztcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiDkuoznu7TnoIHnu4Tku7ZcclxuICovXHJcbmxldCBDUVJDb2RlID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuR3JhcGhpY3MsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc3RyaW5nOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdIZWxsbyBXb3JsZCEnLFxyXG4gICAgICAgICAgICBub3RpZnkob2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0cmluZyA9PT0gb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbnRlbnQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBiYWNrQ29sb3I6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuQ29sb3IsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGNjLkNvbG9yLldISVRFLFxyXG4gICAgICAgICAgICBub3RpZnkoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbnRlbnQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBmb3JlQ29sb3I6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuQ29sb3IsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGNjLkNvbG9yLkJMQUNLLFxyXG4gICAgICAgICAgICBub3RpZnkob2xkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSB0aGlzLmZvcmVDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICAgICAgZGVmYXVsdDogMTAsXHJcbiAgICAgICAgICAgIG5vdGlmeShvbGQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvbGQgPT09IHRoaXMubWFyZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfc2l6ZTogMjAwLFxyXG4gICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuRmxvYXQsXHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2l6ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZSh2YWx1ZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKHRoaXMuX3NpemUsIHRoaXMuX3NpemUpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29udGVudCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRTdHJpbmcoY3VzdG9tRGF0YSwgc2VuZGVyKSB7XHJcbiAgICAgICAgaWYgKHNlbmRlci5zdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHJpbmcgPSBzZW5kZXIuc3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2V0Q29udGVudCgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgLy/og4zmma/oibJcclxuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IHRoaXMuYmFja0NvbG9yO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IC13aWR0aCAqIHRoaXMubm9kZS5hbmNob3JYO1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gLXdpZHRoICogdGhpcy5ub2RlLmFuY2hvclk7XHJcbiAgICAgICAgdGhpcy5yZWN0KG9mZnNldFgsIG9mZnNldFksIHdpZHRoLCB3aWR0aCk7XHJcbiAgICAgICAgdGhpcy5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIC8v55Sf5oiQ5LqM57u056CB5pWw5o2uXHJcbiAgICAgICAgbGV0IHFyY29kZSA9IG5ldyBRUkNvZGUoLTEsIDIpO1xyXG4gICAgICAgIHFyY29kZS5hZGREYXRhKHRoaXMuc3RyaW5nKTtcclxuICAgICAgICBxcmNvZGUubWFrZSgpO1xyXG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gdGhpcy5mb3JlQ29sb3I7XHJcbiAgICAgICAgbGV0IHNpemUgPSB3aWR0aCAtIHRoaXMubWFyZ2luICogMjtcclxuICAgICAgICBsZXQgbnVtID0gcXJjb2RlLmdldE1vZHVsZUNvdW50KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRpbGVXID0gc2l6ZSAvIG51bTtcclxuICAgICAgICBsZXQgdGlsZUggPSBzaXplIC8gbnVtO1xyXG4gICAgICAgIGxldCB3ID0gTWF0aC5jZWlsKHRpbGVXKTtcclxuICAgICAgICBsZXQgaCA9IE1hdGguY2VpbCh0aWxlSCk7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbnVtOyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBudW07IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocXJjb2RlLmlzRGFyayhyb3csIGNvbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3Qob2Zmc2V0WCArIHRoaXMubWFyZ2luICsgY29sICogdGlsZVcsIG9mZnNldFggKyBzaXplIC0gdGlsZUggLSBNYXRoLnJvdW5kKHJvdyAqIHRpbGVIKSArIHRoaXMubWFyZ2luLCB3LCBoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXHJcbn0pO1xyXG5cclxuY2MuZ2FtZS5vbmNlKGNjLmdhbWUuRVZFTlRfRU5HSU5FX0lOSVRFRCwgZnVuY3Rpb24gKCkge1xyXG4gICAgQ1FSQ29kZS5fYXNzZW1ibGVyID0gY2MuR3JhcGhpY3MuX2Fzc2VtYmxlcjtcclxufSk7XHJcblxyXG5jYy5DbGFzcy5BdHRyLnNldENsYXNzQXR0cihDUVJDb2RlLCAnbGluZVdpZHRoJywgJ3Zpc2libGUnLCBmYWxzZSk7XHJcbmNjLkNsYXNzLkF0dHIuc2V0Q2xhc3NBdHRyKENRUkNvZGUsICdsaW5lSm9pbicsICd2aXNpYmxlJywgZmFsc2UpO1xyXG5jYy5DbGFzcy5BdHRyLnNldENsYXNzQXR0cihDUVJDb2RlLCAnbGluZUNhcCcsICd2aXNpYmxlJywgZmFsc2UpO1xyXG5jYy5DbGFzcy5BdHRyLnNldENsYXNzQXR0cihDUVJDb2RlLCAnc3Ryb2tlQ29sb3InLCAndmlzaWJsZScsIGZhbHNlKTtcclxuY2MuQ2xhc3MuQXR0ci5zZXRDbGFzc0F0dHIoQ1FSQ29kZSwgJ21pdGVyTGltaXQnLCAndmlzaWJsZScsIGZhbHNlKTtcclxuY2MuQ2xhc3MuQXR0ci5zZXRDbGFzc0F0dHIoQ1FSQ29kZSwgJ2ZpbGxDb2xvcicsICd2aXNpYmxlJywgZmFsc2UpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDUVJDb2RlOyJdfQ==