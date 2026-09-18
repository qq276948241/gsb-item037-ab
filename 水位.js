function 报水位(水位) {
  if (水位 < 850) {
    return '未到警戒';
  }
  if (水位 < 920) {
    return '警戒';
  }
  if (水位 < 980) {
    return '保证';
  }
  return '历史最高';
}

function 主流程(参数) {
  if (参数.length !== 1 || !/^[0-9]+$/.test(参数[0])) {
    process.stderr.write('没法报水位：请给出一个不小于零的整数厘米水位\n');
    process.exitCode = 2;
    return;
  }
  const 水位 = Number(参数[0]);
  process.stdout.write(报水位(水位) + '\n');
}

if (require.main === module) {
  主流程(process.argv.slice(2));
}

module.exports = { 报水位 };
