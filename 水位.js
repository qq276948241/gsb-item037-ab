#!/usr/bin/env node

const ERROR_MESSAGE = '没法报水位：请给出一个不小于零的整数厘米水位';

function classifyWaterLevel(value) {
  if (typeof value !== 'string' || !/^[0-9]+$/.test(value)) {
    throw new Error(ERROR_MESSAGE);
  }

  const level = BigInt(value);

  if (level < 850n) {
    return '未到警戒';
  }
  if (level < 920n) {
    return '警戒';
  }
  if (level < 980n) {
    return '保证';
  }
  return '历史最高';
}

if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 1) {
    process.stderr.write(`${ERROR_MESSAGE}\n`);
    process.exitCode = 2;
  } else {
    try {
      process.stdout.write(`${classifyWaterLevel(args[0])}\n`);
    } catch (error) {
      process.stderr.write(`${ERROR_MESSAGE}\n`);
      process.exitCode = 2;
    }
  }
}

module.exports = classifyWaterLevel;
module.exports.classifyWaterLevel = classifyWaterLevel;
