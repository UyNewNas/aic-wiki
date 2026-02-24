// 干员数据加载器
// 从 operators 目录加载干员数据，不修改原有的 operators.js 文件

// 预定义的全局变量名映射，根据实际文件命名添加
const globalVarMap = {
    '3': 'operator_3_狼卫',
    '4': 'operator_4_别礼',
    '5': 'operator_5_佩丽卡',
    '7': 'operator_7_莱万汀',
    '11': 'operator_11_艾尔黛拉',
    '12': 'operator_12_陈千语',
    '13': 'operator_13_大潘',
    '24': 'operator_24_余烬',
    '57': 'operator_57_弧光',
    '87': 'operator_87_阿列什',
    '88': 'operator_88_艾维文娜',
    '89': 'operator_89__管理员_男',
    '90': 'operator_90_昼雪',
    '91': 'operator_91_安塔尔',
    '92': 'operator_92_萤石',
    '93': 'operator_93_埃特拉',
    '94': 'operator_94_卡契尔',
    '95': 'operator_95_秋栗',
    '130': 'operator_130_黎风',
    '131': 'operator_131_骏卫',
    '150': 'operator_150_赛希',
    '156': 'operator_156_管理员_女',
    '157': 'operator_157_伊冯',
    '159': 'operator_159_洁尔佩塔'
};

// 加载干员数据
function loadOperatorsFromFiles() {
    const operators = [];
    
    // 遍历所有干员ID
    for (const [operatorId, globalVarName] of Object.