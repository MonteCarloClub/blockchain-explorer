import { keccak256 } from "js-sha3";
import { HmacSHA256 } from "crypto-js";
import { Point } from "@noble/secp256k1";

/**
 * 随机生成 256 bits
 * @returns 长度为 64 的 16 进制串
 */
export function random256() {
  const randomSeed = Math.random().toString();
  return HmacSHA256(randomSeed, "blockchain").toString();
}

/**
 * 返回传入私钥在曲线 Secp256k1 上对应的公钥坐标及其地址形式（04 || x || y）
 * @param prikey 私钥
 * @returns \{PK, x, y}
 */
export function drivePub(prikey: string) {
  const pkPoint = Point.fromPrivateKey(prikey);
  const x = pkPoint.x.toString(16).padStart(64, "0");
  const y = pkPoint.y.toString(16).padStart(64, "0");
  const PK = "04" + x + y;
  return { x, y, PK };
}

/**
 * Convert a hex string to an ArrayBuffer.
 * https://gist.github.com/don/871170d88cf6b9007f7663fdbc23fe09
 *
 * @param {string} hexString - hex representation of bytes.
 * @return {Array} - Array of integers.
 */
function hexStringToArray(hexString: string) {
  // remove the leading 0x
  hexString = hexString.replace(/^0x/, "");

  // ensure even number of characters
  if (hexString.length % 2 != 0) {
    console.log(
      "WARNING: expecting an even number of characters in the hexString"
    );
  }

  // check for some non-hex characters
  var bad = hexString.match(/[G-Z\s]/i);
  if (bad) {
    console.log("WARNING: found non-hex characters", bad);
  }

  // split the string into pairs of octets
  var pairs = hexString.match(/[\dA-F]{2}/gi) || [];

  // convert the octets to integers
  return pairs.map((s) => parseInt(s, 16));
}

/**
 * Keccak256 hash function
 *
 * @method keccak256Hash
 * @param {Array} hex array of hex Str
 * @returns {String}  hexStr, 0x------
 */
export const keccak256Hash = function (hexes: string[]) {
  let integers: number[] = [];

  for (const hex of hexes) {
    integers = integers.concat(hexStringToArray(hex));
  }

  return "0x" + keccak256(new Uint8Array(integers));
};
