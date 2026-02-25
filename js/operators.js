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

// UP干员列表
let upOperators = [];

// 加载UP干员列表
function loadUpOperators() {
    try {
        // 从operators_up.js文件中加载UP干员列表
        console.log('开始加载UP干员列表');
        const script = document.createElement('script');
        script.src = 'operators/operators_up.js';
        script.async = false;
        script.onload = function() {
            if (window.up_operators) {
                upOperators = window.up_operators;
                console.log('UP干员列表加载成功:', upOperators);
            } else {
                console.error('UP干员列表未定义');
                upOperators = [];
            }
        };
        script.onerror = function() {
            console.error('加载UP干员列表失败');
            upOperators = [];
        };
        document.head.appendChild(script);
    } catch (error) {
        console.error('加载UP干员列表出错:', error);
        upOperators = [];
    }
}

// 干员数据容器
let operatorsData = {
    "fatherTypeId": "1",
    "filterTagTree": [
        {
            "children": [
                {
                    "children": [],
                    "id": "10201",
                    "name": "近卫",
                    "type": 4,
                    "value": "profession_guard"
                },
                {
                    "children": [],
                    "id": "10202",
                    "name": "术师",
                    "type": 4,
                    "value": "profession_caster"
                },
                {
                    "children": [],
                    "id": "10203",
                    "name": "突击",
                    "type": 4,
                    "value": "profession_assault"
                },
                {
                    "children": [],
                    "id": "10204",
                    "name": "先锋",
                    "type": 4,
                    "value": "profession_vanguard"
                },
                {
                    "children": [],
                    "id": "10205",
                    "name": "重装",
                    "type": 4,
                    "value": "profession_defender"
                },
                {
                    "children": [],
                    "id": "10206",
                    "name": "辅助",
                    "type": 4,
                    "value": "profession_supporter"
                }
            ],
            "id": "10200",
            "name": "干员职业",
            "type": 4,
            "value": ""
        },
        {
            "children": [
                {
                    "children": [],
                    "id": "10001",
                    "name": "1星",
                    "type": 2,
                    "value": "rarity_1"
                },
                {
                    "children": [],
                    "id": "10002",
                    "name": "2星",
                    "type": 2,
                    "value": "rarity_2"
                },
                {
                    "children": [],
                    "id": "10003",
                    "name": "3星",
                    "type": 2,
                    "value": "rarity_3"
                },
                {
                    "children": [],
                    "id": "10004",
                    "name": "4星",
                    "type": 2,
                    "value": "rarity_4"
                },
                {
                    "children": [],
                    "id": "10005",
                    "name": "5星",
                    "type": 2,
                    "value": "rarity_5"
                },
                {
                    "children": [],
                    "id": "10006",
                    "name": "6星",
                    "type": 2,
                    "value": "rarity_6"
                }
            ],
            "id": "10000",
            "name": "星级",
            "type": 2,
            "value": ""
        },
        {
            "children": [
                {
                    "children": [],
                    "id": "10101",
                    "name": "灼热",
                    "type": 3,
                    "value": "char_property_fire"
                },
                {
                    "children": [],
                    "id": "10102",
                    "name": "电磁",
                    "type": 3,
                    "value": "char_property_pulse"
                },
                {
                    "children": [],
                    "id": "10103",
                    "name": "寒冷",
                    "type": 3,
                    "value": "char_property_cryst"
                },
                {
                    "children": [],
                    "id": "10104",
                    "name": "自然",
                    "type": 3,
                    "value": "char_property_natural"
                },
                {
                    "children": [],
                    "id": "10105",
                    "name": "物理",
                    "type": 3,
                    "value": "char_property_physical"
                }
            ],
            "id": "10100",
            "name": "属性",
            "type": 3,
            "value": ""
        },
        {
            "children": [
                {
                    "children": [],
                    "id": "10214",
                    "name": "施术单元",
                    "type": 1,
                    "value": ""
                },
                {
                    "children": [],
                    "id": "10218",
                    "name": "手铳",
                    "type": 1,
                    "value": ""
                },
                {
                    "children": [],
                    "id": "10219",
                    "name": "单手剑",
                    "type": 1,
                    "value": ""
                },
                {
                    "children": [],
                    "id": "10216",
                    "name": "双手剑",
                    "type": 1,
                    "value": ""
                },
                {
                    "children": [],
                    "id": "10213",
                    "name": "长柄武器",
                    "type": 1,
                    "value": ""
                }
            ],
            "id": "10208",
            "name": "武器",
            "type": 1,
            "value": ""
        },
        {
            "children": [
                {
                    "children": [],
                    "id": "10210",
                    "name": "力量",
                    "type": 1,
                    "value": ""
                },
                {
                    "children": [],
                    "id": "10211",
                    "name": "敏捷",
                    "type": 1,
                    "value": ""
                },
                {
                    "children": [],
                    "id": "10217",
                    "name": "智识",
                    "type": 1,
                    "value": ""
                },
                {
                    "children": [],
                    "id": "10212",
                    "name": "意志",
                    "type": 1,
                    "value": ""
                }
            ],
            "id": "10207",
            "name": "主能力",
            "type": 1,
            "value": ""
        },
        {
            "children": [
                {
                    "children": [],
                    "id": "10221",
                    "name": "力量",
                    "type": 1,
                    "value": ""
                },
                {
                    "children": [],
                    "id": "10222",
                    "name": "敏捷",
                    "type": 1,
                    "value": ""
                },
                {
                    "children": [],
                    "id": "10220",
                    "name": "智识",
                    "type": 1,
                    "value": ""
                },
                {
                    "children": [],
                    "id": "10215",
                    "name": "意志",
                    "type": 1,
                    "value": ""
                }
            ],
            "id": "10209",
            "name": "副能力",
            "type": 1,
            "value": ""
        }
    ],
    "icon": "",
    "id": "1",
    "items": []
};

// 加载干员数据
function loadOperatorsData() {
    console.log('开始加载干员数据');
    console.log('globalVarMap大小:', Object.keys(globalVarMap).length);
    // 清空原有数据
    operatorsData.items = [];
    // 遍历所有干员ID
    for (const [operatorId, globalVarName] of Object.entries(globalVarMap)) {
        try {
            // 从全局变量中获取干员数据
            console.log('尝试加载干员:', operatorId, globalVarName);
            const operatorData = window[globalVarName];
            if (operatorData) {
                console.log('成功获取干员数据:', operatorId, operatorData.operator?.name);
                // 获取能力值和面板值（使用满级数值）
                const eliteData = operatorData.cleaned_data?.ability_extension?.elite || {};
                const maxLevelData = eliteData["满级数值"] || eliteData["80级"] || eliteData["60级"] || {};
                const abilityValues = maxLevelData.能力值 || {};
                const basicStats = maxLevelData.基础数据 || {};
                
                // 构建符合原有格式的干员数据
                const operator = {
                    "brief": {
                        "associate": null,
                        "composite": null,
                        "cover": operatorData.operator?.cover || "./images/default.png",
                        "description": null,
                        "name": operatorData.operator?.name || "未知干员",
                        "subTypeList": [
                            {
                                "subTypeId": "10000",
                                "value": getRarityValue(operatorData.cleaned_data?.combat_info?.star || "5星")
                            },
                            {
                                "subTypeId": "10100",
                                "value": getAttributeValue(operatorData.cleaned_data?.combat_info?.attribute || "物理")
                            },
                            {
                                "subTypeId": "10200",
                                "value": getClassValue(operatorData.cleaned_data?.combat_info?.class || "术师")
                            },
                            {
                                "subTypeId": "10207",
                                "value": getAbilityValue(operatorData.cleaned_data?.combat_info?.main_ability || "力量")
                            },
                            {
                                "subTypeId": "10208",
                                "value": getWeaponValue(operatorData.cleaned_data?.combat_info?.weapon || "手铳")
                            },
                            {
                                "subTypeId": "10209",
                                "value": getSubAbilityValue(operatorData.cleaned_data?.combat_info?.sub_ability || "敏捷")
                            }
                        ]
                    },
                    "caption": [],
                    "itemId": operatorId,
                    "lang": "zh_Hans",
                    "name": operatorData.operator?.name || "未知干员",
                    "publishedAtTs": "1768000000",
                    "status": 2,
                    "tagIds": [],
                    "detailed_info": {
                        "gender": operatorData.cleaned_data?.basic_info?.gender || "[默认] 未知",
                        "weapon": operatorData.cleaned_data?.combat_info?.weapon || "[默认] 未知",
                        "main_ability": operatorData.cleaned_data?.combat_info?.main_ability || "[默认] 未知",
                        "sub_ability": operatorData.cleaned_data?.combat_info?.sub_ability || "[默认] 未知",
                        "abilities": {
                            "strength": abilityValues.力量 || 0,
                            "agility": abilityValues.敏捷 || 0,
                            "intelligence": abilityValues.智识 || 0,
                            "will": abilityValues.意志 || 0
                        },
                        "stats": {
                            "hp": basicStats.基础生命值 || 0,
                            "atk": basicStats.基础攻击力 || 0,
                            "def": basicStats.基础防御力 || 0
                        },
                        "background": {
                            "faction": operatorData.cleaned_data?.archive?.info?.阵营 || operatorData.cleaned_data?.basic_info?.identity || "[默认] 未知",
                            "race": operatorData.cleaned_data?.basic_info?.race || operatorData.cleaned_data?.archive?.info?.种族 || "[默认] 未知",
                            "origin": operatorData.cleaned_data?.basic_info?.origin || "[默认] 未知"
                        },
                        "tags": operatorData.cleaned_data?.basic_info?.tags || ["[默认] 未知"],
                        "release_date": "2026年1月22日"
                    }
                };
                
                // 添加到干员列表
                operatorsData.items.push(operator);
                console.log('干员添加成功:', operatorId, operator.name);
            } else {
                console.error('干员数据不存在:', operatorId, globalVarName);
            }
        } catch (error) {
            console.error(`加载干员 ${operatorId} 数据失败:`, error);
        }
    }
    console.log('干员数据加载完成:', operatorsData.items.length, '个干员');
    console.log('operatorsData.items:', operatorsData.items);
}

// 筛选干员数据
function filterOperators() {
    try {
        // 获取筛选值
        const classFilter = document.getElementById('class-filter')?.value || 'all';
        const rarityFilter = document.getElementById('rarity-filter')?.value || 'all';
        const attributeFilter = document.getElementById('attribute-filter')?.value || 'all';
        const weaponFilter = document.getElementById('weapon-filter')?.value || 'all';
        const mainAbilityFilter = document.getElementById('main-ability-filter')?.value || 'all';
        const subAbilityFilter = document.getElementById('sub-ability-filter')?.value || 'all';
        
        console.log('筛选值:', {
            classFilter,
            rarityFilter,
            attributeFilter,
            weaponFilter,
            mainAbilityFilter,
            subAbilityFilter
        });
        
        // 重新加载所有干员数据
        loadOperatorsData();
        
        // 应用筛选
        if (classFilter !== 'all') {
            operatorsData.items = operatorsData.items.filter(operator => {
                const classValue = operator.brief.subTypeList.find(item => item.subTypeId === '10200')?.value || '';
                return getClassValueFromId(classValue) === classFilter;
            });
        }
        
        if (rarityFilter !== 'all') {
            operatorsData.items = operatorsData.items.filter(operator => {
                const rarityValue = operator.brief.subTypeList.find(item => item.subTypeId === '10000')?.value || '';
                return getRarityValueFromId(rarityValue) === rarityFilter;
            });
        }
        
        if (attributeFilter !== 'all') {
            operatorsData.items = operatorsData.items.filter(operator => {
                const attributeValue = operator.brief.subTypeList.find(item => item.subTypeId === '10100')?.value || '';
                return getAttributeValueFromId(attributeValue) === attributeFilter;
            });
        }
        
        if (weaponFilter !== 'all') {
            operatorsData.items = operatorsData.items.filter(operator => {
                const weaponValue = operator.brief.subTypeList.find(item => item.subTypeId === '10208')?.value || '';
                return getWeaponValueFromId(weaponValue) === weaponFilter;
            });
        }
        
        if (mainAbilityFilter !== 'all') {
            operatorsData.items = operatorsData.items.filter(operator => {
                const mainAbilityValue = operator.brief.subTypeList.find(item => item.subTypeId === '10207')?.value || '';
                return getAbilityValueFromId(mainAbilityValue) === mainAbilityFilter;
            });
        }
        
        if (subAbilityFilter !== 'all') {
            operatorsData.items = operatorsData.items.filter(operator => {
                const subAbilityValue = operator.brief.subTypeList.find(item => item.subTypeId === '10209')?.value || '';
                return getSubAbilityValueFromId(subAbilityValue) === subAbilityFilter;
            });
        }
        
        console.log('筛选后干员数量:', operatorsData.items.length);
        
        // 重新渲染干员列表
        renderOperators();
    } catch (error) {
        console.error('筛选出错:', error);
    }
}

// 辅助函数：从 ID 获取职业值
function getClassValueFromId(id) {
    const classMap = {
        '10201': 'guard',
        '10202': 'caster',
        '10203': 'assault',
        '10204': 'vanguard',
        '10205': 'tank',
        '10206': 'support'
    };
    return classMap[id] || 'all';
}

// 辅助函数：从 ID 获取星级值
function getRarityValueFromId(id) {
    const rarityMap = {
        '10001': '1',
        '10002': '2',
        '10003': '3',
        '10004': '4',
        '10005': '5',
        '10006': '6'
    };
    return rarityMap[id] || 'all';
}

// 辅助函数：从 ID 获取属性值
function getAttributeValueFromId(id) {
    const attributeMap = {
        '10101': 'fire',
        '10102': 'electric',
        '10103': 'cold',
        '10104': 'nature',
        '10105': 'physical'
    };
    return attributeMap[id] || 'all';
}

// 辅助函数：从 ID 获取武器值
function getWeaponValueFromId(id) {
    const weaponMap = {
        '10214': 'staff',
        '10218': 'pistol',
        '10219': 'sword',
        '10216': 'greatsword',
        '10213': 'spear'
    };
    return weaponMap[id] || 'all';
}

// 辅助函数：从 ID 获取主能力值
function getAbilityValueFromId(id) {
    const abilityMap = {
        '10210': 'strength',
        '10211': 'agility',
        '10217': 'intelligence',
        '10212': 'will'
    };
    return abilityMap[id] || 'all';
}

// 辅助函数：从 ID 获取副能力值
function getSubAbilityValueFromId(id) {
    const abilityMap = {
        '10221': 'strength',
        '10222': 'agility',
        '10220': 'intelligence',
        '10215': 'will'
    };
    return abilityMap[id] || 'all';
}

// 重置筛选器
function resetFilters() {
    // 重置所有筛选值
    const classFilter = document.getElementById('class-filter');
    if (classFilter) classFilter.value = 'all';
    const rarityFilter = document.getElementById('rarity-filter');
    if (rarityFilter) rarityFilter.value = 'all';
    const attributeFilter = document.getElementById('attribute-filter');
    if (attributeFilter) attributeFilter.value = 'all';
    const weaponFilter = document.getElementById('weapon-filter');
    if (weaponFilter) weaponFilter.value = 'all';
    const mainAbilityFilter = document.getElementById('main-ability-filter');
    if (mainAbilityFilter) mainAbilityFilter.value = 'all';
    const subAbilityFilter = document.getElementById('sub-ability-filter');
    if (subAbilityFilter) subAbilityFilter.value = 'all';
    
    // 重新加载所有干员数据并渲染
    loadOperatorsData();
    renderOperators();
}

// 添加事件监听器
document.addEventListener('DOMContentLoaded', () => {
    // 应用筛选按钮
    const applyFilterBtn = document.getElementById('apply-filter');
    if (applyFilterBtn) {
        applyFilterBtn.addEventListener('click', filterOperators);
    }
    
    // 重置按钮
    const resetFilterBtn = document.getElementById('reset-filter');
    if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', resetFilters);
    }
});

// 辅助函数：获取星级值
function getRarityValue(star) {
    const rarityMap = {
        "1星": "10001",
        "2星": "10002",
        "3星": "10003",
        "4星": "10004",
        "5星": "10005",
        "6星": "10006"
    };
    return rarityMap[star] || "10005"; // 默认 5星
}

// 辅助函数：获取属性值
function getAttributeValue(attribute) {
    const attributeMap = {
        "灼热": "10101",
        "电磁": "10102",
        "寒冷": "10103",
        "自然": "10104",
        "物理": "10105"
    };
    return attributeMap[attribute] || "10105"; // 默认 物理
}

// 辅助函数：获取职业值
function getClassValue(className) {
    const classMap = {
        "近卫": "10201",
        "术师": "10202",
        "突击": "10203",
        "先锋": "10204",
        "重装": "10205",
        "辅助": "10206"
    };
    return classMap[className] || "10202"; // 默认 术师
}

// 辅助函数：获取主能力值
function getAbilityValue(ability) {
    const abilityMap = {
        "力量": "10210",
        "敏捷": "10211",
        "智识": "10217",
        "意志": "10212"
    };
    return abilityMap[ability] || "10210"; // 默认 力量
}

// 辅助函数：获取副能力值
function getSubAbilityValue(ability) {
    const abilityMap = {
        "力量": "10221",
        "敏捷": "10222",
        "智识": "10220",
        "意志": "10215"
    };
    return abilityMap[ability] || "10221"; // 默认 力量
}

// 辅助函数：获取武器值
function getWeaponValue(weapon) {
    const weaponMap = {
        "施术单元": "10214",
        "手铳": "10218",
        "单手剑": "10219",
        "双手剑": "10216",
        "长柄武器": "10213"
    };
    return weaponMap[weapon] || "10218"; // 默认 手铳
}

// 预加载所有干员数据文件
function preloadOperatorFiles() {
    console.log('开始预加载干员数据文件');
    const operatorIds = Object.keys(globalVarMap);
    console.log('干员ID列表:', operatorIds);
    
    // 使用同步加载方式，确保所有脚本按顺序执行
    const scriptsToLoad = operatorIds.map(operatorId => {
        const fileName = globalVarMap[operatorId];
        return `operators/${fileName}.js`;
    });
    
    console.log('需要加载的脚本:', scriptsToLoad);
    
    // 逐个加载脚本
    scriptsToLoad.forEach(scriptSrc => {
        const script = document.createElement('script');
        script.src = scriptSrc;
        script.async = false;
        console.log('加载脚本:', scriptSrc);
        document.head.appendChild(script);
    });
}

// 当所有资源加载完成后，预加载干员数据文件并初始化
window.onload = function() {
    console.log('所有资源加载完成，开始初始化干员数据');
    // 先加载UP干员列表
    loadUpOperators();
    // 然后预加载干员数据文件
    preloadOperatorFiles();
    // 给脚本加载更多时间
    setTimeout(() => {
        loadOperatorsData();
        renderOperators();
    }, 1000);
};



const attributeColors = {
    '10101': 'bg-red-500',
    '10102': 'bg-purple-500',
    '10103': 'bg-cyan-500',
    '10104': 'bg-green-500',
    '10105': 'bg-blue-500'
};

const professionImages = {
    '10201': 'images/a089ebba35f1f3bdbb91d4ce196f76e1.png', // 近卫
    '10202': 'images/11db1d30aa3c6a03e185041f93c34cf9.png', // 术师
    '10203': 'images/adb037b1c91a286b327b20105fd6a91c.png', // 突击
    '10204': 'images/0a6af6c7e7bfe14cc3ba46facad1f223.png', // 先锋
    '10205': 'images/024be87f334fcb9c49e323c8acbc83bc.png', // 重装
    '10206': 'images/fc9bd139a3eb5fae8eb386a0632430c9.png'  // 辅助
};

const attributeImages = {
    '10101': 'images/55123575290c305b84a32935c53b5b5d.png', // 灼热
    '10102': 'images/c242a087a8692aaf549d90cf0cb6333a.png', // 电磁
    '10103': 'images/455928850a7131ed4f05f52239a27ce5.png', // 寒冷
    '10104': 'images/ca444454f4aebafd4a4aebb8acf1d726.png', // 自然
    '10105': 'images/34a573fd082ea88ffbd20d38fa36c5b7.png'  // 物理
};

const upImage = 'images/0b2606d89c5c98727339ec8088d9f71e.png';

const starSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="OperatorEditCard__Rank-ilQzgD dcsdby w-4 h-4">
<g fill-rule="evenodd" clip-path="url(#rank_svg__a)" clip-rule="evenodd">
<path fill="#FDE047" d="m5.845 17.424 6.369-3.667L9.605 9.25.87 14.28zm17.249.69-6.37-3.678-2.608 4.519 8.736 5.043zM20.417 0 15.2 2.686v7.07h5.217z" opacity="0.6">
</path>
<path fill="#EAB308" d="m8.298 16.03 3.765-2.174-2.609-4.518-1.957 1.13s2.051 4.325.8 5.562m12.343.668-3.765-2.174-2.61 4.518 1.959 1.13s2.72-3.939 4.416-3.474m-.224-9.202S15.49 7.266 15.2 5.41v4.348h5.217z" opacity="0.502"></path>
<path fill="#FACC15" d="m13.922 9.77-.136-6.147L9.42 6.145l.008 6.622c.29 2.125-1.28 3.35-1.28 3.35l4.519-2.61c1.53-1.238 1.256-3.737 1.256-3.737m3.887 3.639 5.391 2.957v-5.044l-5.74-3.304c-2.141-.655-2.26-2.783-2.26-2.783v5.217c.15 2.103 2.609 2.957 2.609 2.957m-5.4 1.547-5.257 3.191 4.368 2.522 5.731-3.318c1.695-1.314 3.54-.567 3.54-.567l-4.518-2.608c-1.839-.707-3.865.78-3.865.78">
</path>
</g>
<defs>
<clipPath id="rank_svg__a"><path fill="#fff" d="M0 0h24v24H0z">
</path></clipPath></defs></svg>`;

function getSubTypeName(subTypeId, value) {
    if (!operatorsData || !operatorsData.filterTagTree) return '';
    const category = operatorsData.filterTagTree.find(item => item.id === subTypeId);
    if (category && category.children) {
        const item = category.children.find(child => child.id === value);
        if (item) return item.name;
    }
    return '';
}

function getRarityStars(value) {
    const stars = parseInt(value.slice(-1));
    let starHtml = '';
    for (let i = 0; i < stars; i++) {
        starHtml += starSVG;
    }
    return starHtml;
}

function renderOperatorCard(operator) {
    const brief = operator.brief;
    const subTypeList = brief.subTypeList;
    
    const rarityValue = subTypeList.find(item => item.subTypeId === '10000')?.value || '';
    const attributeValue = subTypeList.find(item => item.subTypeId === '10100')?.value || '';
    const professionValue = subTypeList.find(item => item.subTypeId === '10200')?.value || '';
    
    const professionName = getSubTypeName('10200', professionValue);
    const attributeName = getSubTypeName('10100', attributeValue);
    const stars = getRarityStars(rarityValue);
    const isUp = brief.associate?.dotType === 'label_type_up';
    const attributeColor = attributeColors[attributeValue] || 'bg-gray-500';
    
    let cardHtml = '<div class="relative aspect-square rounded-lg overflow-hidden card-hover">';
    cardHtml += '<img src="' + brief.cover + '" alt="' + brief.name + '" class="w-full h-full object-cover">';
    
    // 职业图片
    const professionImage = professionImages[professionValue];
    if (professionImage) {
        cardHtml += '<div class="absolute top-0 left-0 bg-black bg-opacity-50 p-1">';
        cardHtml += '<img src="' + professionImage + '" alt="' + professionName + '" class="w-6 h-6 object-contain">';
        cardHtml += '</div>';
    } else {
        cardHtml += '<div class="absolute top-0 left-0 bg-black bg-opacity-50 text-white text-xs px-2 py-1">' + professionName + '</div>';
    }
    
    // UP图片
    if (isUp) {
        cardHtml += '<div class="absolute top-0 right-0 p-1">';
        cardHtml += '<img src="' + upImage + '" alt="UP" class="w-6 h-6 object-contain">';
        cardHtml += '</div>';
    }
    
    // 属性图片
    const attributeImage = attributeImages[attributeValue];
    if (attributeImage) {
        cardHtml += '<div class="absolute top-4 left-0 bg-black bg-opacity-50 p-1">';
        cardHtml += '<img src="' + attributeImage + '" alt="' + attributeName + '" class="w-6 h-6 object-contain">';
        cardHtml += '</div>';
    } else {
        cardHtml += '<div class="absolute top-4 left-0 ' + attributeColor + ' bg-opacity-70 text-white text-xs px-2 py-1">' + attributeName + '</div>';
    }
    cardHtml += '<div class="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white p-2">';
    cardHtml += '<div class="text-sm font-medium">' + brief.name + '</div>';
    cardHtml += '<div class="text-xs flex">' + stars + '</div>';
    cardHtml += '</div>';
    cardHtml += '</div>';
    
    return cardHtml;
}

function renderOperatorRow(operator) {
    const brief = operator.brief;
    const subTypeList = brief.subTypeList;
    const detailedInfo = operator.detailed_info || {};
    
    const rarityValue = subTypeList.find(item => item.subTypeId === '10000')?.value || '';
    const attributeValue = subTypeList.find(item => item.subTypeId === '10100')?.value || '';
    const professionValue = subTypeList.find(item => item.subTypeId === '10200')?.value || '';
    const mainAbilityValue = subTypeList.find(item => item.subTypeId === '10207')?.value || '';
    const subAbilityValue = subTypeList.find(item => item.subTypeId === '10209')?.value || '';
    const weaponValue = subTypeList.find(item => item.subTypeId === '10208')?.value || '';
    
    const professionName = getSubTypeName('10200', professionValue);
    const attributeName = getSubTypeName('10100', attributeValue);
    const mainAbilityName = getSubTypeName('10207', mainAbilityValue);
    const subAbilityName = getSubTypeName('10209', subAbilityValue);
    const weaponName = getSubTypeName('10208', weaponValue);
    const stars = getRarityStars(rarityValue);
    const isUp = brief.associate?.dotType === 'label_type_up';
    
    // 获取职业和属性图片
    const professionImage = professionImages[professionValue];
    const attributeImage = attributeImages[attributeValue];
    
    // 能力值（从详细信息中获取）
    const abilities = detailedInfo.abilities || {
        strength: 0,
        agility: 0,
        intelligence: 0,
        will: 0
    };
    
    // 面板值（从详细信息中获取）
    const stats = detailedInfo.stats || {
        hp: 0,
        atk: 0,
        def: 0
    };
    
    // 性别（从详细信息中获取）
    const gender = detailedInfo.gender || '[默认] 未知';
    
    // 标签（从详细信息中获取）
    const tags = detailedInfo.tags || ['[默认] 未知'];
    
    // 背景信息（从详细信息中获取）
    const background = detailedInfo.background || {
        faction: '[默认] 未知',
        race: '[默认] 未知',
        origin: '[默认] 未知'
    };
    
    // 实装时间（从详细信息中获取）
    const releaseDate = detailedInfo.release_date || '[默认] 未知';
    
    let rowHtml = '<tr class="hover:bg-gray-50 cursor-pointer" data-itemid="' + operator.itemId + '">';
    
    // 头像列
    rowHtml += '<td class="border p-2 text-center">';
    rowHtml += '<div class="relative w-24 h-24 mx-auto rounded overflow-hidden cursor-pointer">';
    rowHtml += '<img src="' + brief.cover + '" alt="' + brief.name + '" class="w-full h-full object-cover cursor-pointer">';
    
    // 左上角职业
    if (professionImage) {
        rowHtml += '<div class="absolute top-0 left-0 bg-black bg-opacity-50 p-1">';
        rowHtml += '<img src="' + professionImage + '" alt="' + professionName + '" class="w-5 h-5 object-contain">';
        rowHtml += '</div>';
    }
    
    // 左下角属性
    if (attributeImage) {
        rowHtml += '<div class="absolute bottom-0 left-0 bg-black bg-opacity-50 p-1">';
        rowHtml += '<img src="' + attributeImage + '" alt="' + attributeName + '" class="w-5 h-5 object-contain">';
        rowHtml += '</div>';
    }
    
    // 右上角UP标识
    const isUpOperator = upOperators.includes(brief.name);
    if (isUpOperator || isUp) {
        rowHtml += '<div class="absolute top-0 right-0 p-1">';
        rowHtml += '<img src="' + upImage + '" alt="UP" class="w-7 h-7 object-contain">';
        rowHtml += '</div>';
    }
    
    rowHtml += '</div>';
    rowHtml += '</td>';
    
    // 星级列
    rowHtml += '<td class="border p-2 text-center">';
    rowHtml += '<div class="flex items-center justify-center">' + stars + '</div>';
    rowHtml += '</td>';
    
    // 姓名、性别列
    rowHtml += '<td class="border p-2 text-sm text-center">';
    rowHtml += '<div class="cursor-pointer">' + brief.name + '</div>';
    rowHtml += '<div class="text-xs text-gray-500">' + gender + '</div>';
    rowHtml += '</td>';
    
    // 武器、主能力、副能力列
    rowHtml += '<td class="border p-2 text-sm text-center">';
    rowHtml += '<div>' + (weaponName || '未知') + '</div>';
    rowHtml += '<div>' + (mainAbilityName || '未知') + '</div>';
    rowHtml += '<div>' + (subAbilityName || '未知') + '</div>';
    rowHtml += '</td>';
    
    // 能力值列
    rowHtml += '<td class="border p-2 text-sm text-center">';
    rowHtml += '<div class="' + (mainAbilityName === '力量' ? 'bg-yellow-100 font-medium' : subAbilityName === '力量' ? 'bg-gray-100 font-medium' : 'text-gray-500') + '">力量: ' + abilities.strength + '</div>';
    rowHtml += '<div class="' + (mainAbilityName === '敏捷' ? 'bg-yellow-100 font-medium' : subAbilityName === '敏捷' ? 'bg-gray-100 font-medium' : 'text-gray-500') + '">敏捷: ' + abilities.agility + '</div>';
    rowHtml += '<div class="' + (mainAbilityName === '智识' ? 'bg-yellow-100 font-medium' : subAbilityName === '智识' ? 'bg-gray-100 font-medium' : 'text-gray-500') + '">智识: ' + abilities.intelligence + '</div>';
    rowHtml += '<div class="' + (mainAbilityName === '意志' ? 'bg-yellow-100 font-medium' : subAbilityName === '意志' ? 'bg-gray-100 font-medium' : 'text-gray-500') + '">意志: ' + abilities.will + '</div>';
    rowHtml += '</td>';
    
    // 面板值列
    rowHtml += '<td class="border p-2 text-sm text-center">';
    rowHtml += '<div>生命值: ' + stats.hp + '</div>';
    rowHtml += '<div>攻击力: ' + stats.atk + '</div>';
    rowHtml += '<div>防御力: ' + stats.def + '</div>';
    rowHtml += '</td>';
    
    // 标签列
    rowHtml += '<td class="border p-2 text-sm text-center">';
    tags.forEach(tag => {
        rowHtml += '<div>' + tag + '</div>';
    });
    rowHtml += '</td>';

    
    // 背景列
    rowHtml += '<td class="border p-2 text-sm text-center">';
    rowHtml += '<div>' + background.faction + '</div>';
    rowHtml += '<div>' + background.race + '</div>';
    rowHtml += '<div>' + background.origin + '</div>';
    rowHtml += '</td>';
    
    // 实装时间列
    rowHtml += '<td class="border p-2 text-sm text-center">';
    rowHtml += '<div>' + releaseDate + '</div>';
    rowHtml += '</td>';
    
    rowHtml += '</tr>';
    
    return rowHtml;
}

function renderOperators() {
    console.log('开始渲染干员列表');
    console.log('operatorsData:', operatorsData);
    console.log('operatorsData.items长度:', operatorsData?.items?.length || 0);
    
    if (!operatorsData || !operatorsData.items) {
        console.error('operatorsData或items不存在');
        return;
    }
    
    // 排序逻辑：主排序按实装时间（靠后的在上），副排序按稀有度（高稀有度在上），副副排序按UP状态（UP干员在上）
    operatorsData.items.sort((a, b) => {
        // 主排序：按实装时间
        const dateA = a.detailed_info?.release_date || "";
        const dateB = b.detailed_info?.release_date || "";
        if (dateA !== dateB) {
            return dateB.localeCompare(dateA); // 倒序，靠后的在上
        }
        
        // 副排序：按稀有度
        const rarityA = a.brief.subTypeList.find(item => item.subTypeId === '10000')?.value || '';
        const rarityB = b.brief.subTypeList.find(item => item.subTypeId === '10000')?.value || '';
        if (rarityA !== rarityB) {
            return rarityB.localeCompare(rarityA); // 倒序，高稀有度在上
        }
        
        // 副副排序：按UP状态（UP干员在上）
        const isUpA = upOperators.includes(a.brief.name) || (a.brief.associate?.dotType === 'label_type_up');
        const isUpB = upOperators.includes(b.brief.name) || (b.brief.associate?.dotType === 'label_type_up');
        if (isUpA !== isUpB) {
            return isUpA ? -1 : 1; // UP干员在上
        }
        
        return 0;
    });
    
    const container = document.getElementById('operators-table-body');
    if (!container) {
        console.error('operators-table-body元素不存在');
        return;
    }
    
    console.log('开始生成干员表格行');
    let allRowsHtml = '';
    for (let i = 0; i < operatorsData.items.length; i++) {
        console.log('渲染干员:', i, operatorsData.items[i].name);
        allRowsHtml += renderOperatorRow(operatorsData.items[i]);
    }
    container.innerHTML = allRowsHtml;
    console.log('干员表格渲染完成');
    
    const countElement = document.querySelector('.text-sm.text-gray-500');
    if (countElement) {
        countElement.innerHTML = '显示 <span class="font-medium">1</span> 到 <span class="font-medium">' + operatorsData.items.length + '</span> 共 <span class="font-medium">' + operatorsData.items.length + '</span> 个干员';
        console.log('更新干员计数:', operatorsData.items.length);
    }
    
    // 添加点击事件监听器
    document.querySelectorAll('tr[data-itemid]').forEach(row => {
        row.addEventListener('click', function() {
            const itemId = this.getAttribute('data-itemid');
            window.location.href = 'operator-detail.html?itemId=' + itemId;
        });
    });
    console.log('点击事件监听器添加完成');
}


