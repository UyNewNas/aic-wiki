// 干员详情页面逻辑

// 标签页切换功能
function setupTabs() {
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // 更新标签按钮状态
            tabButtons.forEach(btn => {
                btn.classList.remove('tab-active');
                btn.classList.add('hover:bg-gray-50');
            });
            button.classList.add('tab-active');
            button.classList.remove('hover:bg-gray-50');
            
            // 更新标签内容显示
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });
            document.getElementById(`${tabId}-tab`).classList.remove('hidden');
        });
    });
}

// 计算能力值进度条宽度
function calculateAbilityBarWidth(value, maxValue = 200) {
    return Math.min(Math.round((value / maxValue) * 100), 100);
}

// 星级SVG图标
const starSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4">
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

// 根据星级值获取星级图标
function getRarityStars(starValue) {
    // 从星级值中提取数字，例如 "6星" -> 6
    const stars = parseInt(starValue);
    let starHtml = '';
    for (let i = 0; i < stars; i++) {
        starHtml += starSVG;
    }
    return starHtml;
}

// 从URL参数中获取干员ID，支持id和itemId参数
function getOperatorId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || urlParams.get('itemId') || '3'; // 默认加载狼卫的数据
}

// 获取干员数据
function getOperatorData() {
    const operatorId = getOperatorId();
    
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
    
    // 获取全局变量名
    const globalVarName = globalVarMap[operatorId] || `operator_${operatorId}`;
    console.log('尝试获取干员数据:', operatorId, '全局变量名:', globalVarName);
    // 从全局变量中获取干员数据
    const operatorData = window[globalVarName];
    console.log('获取到的干员数据:', operatorData);
    
    if (!operatorData) {
        throw new Error(`未找到干员数据: ${operatorId} (尝试的全局变量: ${globalVarName})`);
    }
    
    return operatorData;
}

// 加载干员数据
function loadOperatorData() {
    try {
        const operatorData = getOperatorData();
        const operator = operatorData.cleaned_data;
        
        // 填充基本信息
        document.getElementById('operator-name').textContent = operatorData.operator?.name || operator.basic_info?.code;
        
        // 填充星级和职业，使用星级图标
        const operatorClassElement = document.getElementById('operator-class');
        if (operatorClassElement) {
            const starsHtml = getRarityStars(operator.combat_info?.star || '5星');
            operatorClassElement.innerHTML = `<span class="flex items-center">${starsHtml} <span class="ml-2">${operator.combat_info?.class}</span></span>`;
        }
        
        // 设置头像图片
        const avatarElement = document.getElementById('operator-avatar');
        console.log('头像容器元素:', avatarElement);
        
        if (avatarElement) {
            // 清除默认的图标
            avatarElement.innerHTML = '';
            
            // 创建头像图片元素
            const avatarImg = document.createElement('img');
            
            // 尝试从当前干员数据中获取头像图片
            let avatarUrl = operatorData.operator?.cover || operator.brief?.cover || '';
            
            console.log('干员数据:', operatorData);
            console.log('尝试加载头像:', avatarUrl);
            
            if (avatarUrl) {
                avatarImg.src = avatarUrl;
                avatarImg.alt = operatorData.operator?.name || operator.basic_info?.code;
                avatarImg.className = 'w-full h-full object-cover rounded-full';
                
                // 添加错误处理
                avatarImg.onerror = function() {
                    console.error('头像加载失败:', avatarUrl);
                    avatarElement.innerHTML = '<i class="fa fa-user text-4xl text-primary/30"></i>';
                };
                
                avatarElement.appendChild(avatarImg);
                console.log('头像图片元素已添加:', avatarImg);
            } else {
                // 如果没有头像图片，显示默认图标
                console.log('未找到头像图片');
                avatarElement.innerHTML = '<i class="fa fa-user text-4xl text-primary/30"></i>';
            }
        } else {
            console.error('未找到头像容器元素');
        }
        
        document.getElementById('operator-code').textContent = operator.basic_info?.code;
        document.getElementById('operator-gender').textContent = operator.basic_info?.gender;
        document.getElementById('operator-identity').textContent = operator.basic_info?.identity;
        document.getElementById('operator-birthday').textContent = operator.basic_info?.birthday;
        document.getElementById('operator-race').textContent = operator.basic_info?.race;
        document.getElementById('operator-attribute').textContent = operator.combat_info?.attribute;
        

        
        // 填充档案信息
        document.getElementById('faction-value').textContent = operator.archive?.info?.阵营;
        document.getElementById('race-value').textContent = operator.archive?.info?.种族;
        document.getElementById('specialty-value').textContent = `${operator.archive?.info?.['专长·一']}, ${operator.archive?.info?.['专长·二']}`;
        document.getElementById('hobby-value').textContent = `${operator.archive?.info?.['爱好·一']}, ${operator.archive?.info?.['爱好·二']}`;
        
        // 获取满级数据
        const maxLevelData = operator.ability_extension?.elite?.满级数值;
        
        // 填充精英等级数据表格
        const eliteDataTable = document.getElementById('elite-data-table');
        const eliteLevels = operator.ability_extension?.elite;
        if (eliteLevels) {
            // 固定等级顺序，90级对应满级数值
            const fixedLevels = ['初始数值', '20级', '40级', '60级', '80级', '90级'];
            fixedLevels.forEach(level => {
                // 90级对应满级数值
                const dataKey = level === '90级' ? '满级数值' : level;
                const data = eliteLevels[dataKey];
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="border p-2 text-center text-xs">${level}</td>
                    <td class="border p-2 text-center text-xs">${data?.基础数据?.基础生命值 || '-'}</td>
                    <td class="border p-2 text-center text-xs">${data?.基础数据?.基础攻击力 || '-'}</td>
                    <td class="border p-2 text-center text-xs">${data?.能力值?.力量 || '-'}</td>
                    <td class="border p-2 text-center text-xs">${data?.能力值?.敏捷 || '-'}</td>
                    <td class="border p-2 text-center text-xs">${data?.能力值?.智识 || '-'}</td>
                    <td class="border p-2 text-center text-xs">${data?.能力值?.意志 || '-'}</td>
                    <td class="border p-2 text-center text-xs">${data?.需求素材 ? '查看素材' : '-'}</td>
                `;
                eliteDataTable.appendChild(row);
            });
        }
        
        // 填充战斗技能表格
        const skills = operator.ability_extension?.combat_skills;
        if (skills) {
            // 处理不同的数据结构
            if (Array.isArray(skills)) {
                // 标准数组结构
                skills.forEach(skill => {
                    const skillType = skill.技能类型;
                    let tableId = '';
                    let levelsTableId = '';
                    
                    // 根据技能类型确定表格ID
                    switch (skillType) {
                        case '普通攻击':
                            tableId = 'normal-attack-table';
                            levelsTableId = 'normal-attack-levels-table';
                            break;
                        case '战技':
                            tableId = 'tactical-skills-table';
                            levelsTableId = 'tactical-skill-levels-table';
                            break;
                        case '连携技':
                            tableId = 'link-skills-table';
                            levelsTableId = 'link-skill-levels-table';
                            break;
                        case '终结技':
                            tableId = 'ultimate-skills-table';
                            levelsTableId = 'ultimate-skill-levels-table';
                            break;
                    }
                    
                    // 填充技能基本信息
                    const tableBody = document.getElementById(tableId);
                    if (tableBody) {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td class="border p-2 text-center text-sm">${skill.技能类型}</td>
                            <td class="border p-2 text-center text-sm">${skill.技能名字}</td>
                            <td class="border p-2 text-sm">${skill.技能描述}</td>
                        `;
                        tableBody.appendChild(row);
                    }
                    
                    // 填充技能等级数据
                    const levelsTable = document.getElementById(levelsTableId);
                    if (levelsTable && skill.技能等级数据) {
                        // 生成表头
                        const headers = ['技能等级', ...skill.技能等级数据.map(item => item.key)];
                        const thead = document.createElement('thead');
                        thead.className = 'bg-gray-100';
                        thead.innerHTML = `<tr>${headers.map(header => `<th class="border p-1 text-center">${header}</th>`).join('')}</tr>`;
                        levelsTable.appendChild(thead);
                        
                        // 生成等级行
                        const tbody = document.createElement('tbody');
                        
                        // 固定等级：RANK1-9、技能专精1-3
                        const fixedRanks = ['RANK1', 'RANK2', 'RANK3', 'RANK4', 'RANK5', 'RANK6', 'RANK7', 'RANK8', 'RANK9', '技能专精1', '技能专精2', '技能专精3'];
                        
                        fixedRanks.forEach(rank => {
                            // 转换rank为数据文件中的格式（rank1, rank2等）
                            let dataKey = rank;
                            if (rank.startsWith('RANK')) {
                                dataKey = rank.toLowerCase();
                            }
                            
                            const row = document.createElement('tr');
                            const cells = [rank, ...skill.技能等级数据.map(item => item[dataKey] || '-')];
                            row.innerHTML = cells.map(cell => `<td class="border p-1 text-center">${cell}</td>`).join('');
                            tbody.appendChild(row);
                        });
                        
                        levelsTable.appendChild(tbody);
                    }
                });
            } else {
                // 管理员特殊对象结构
                const skillTypes = [
                    { key: 'normal_attack', name: '普通攻击', tableId: 'normal-attack-table', levelsTableId: 'normal-attack-levels-table' },
                    { key: 'tactical_skills', name: '战技', tableId: 'tactical-skills-table', levelsTableId: 'tactical-skill-levels-table' },
                    { key: 'link_skills', name: '连携技', tableId: 'link-skills-table', levelsTableId: 'link-skill-levels-table' },
                    { key: 'ultimate_skills', name: '终结技', tableId: 'ultimate-skills-table', levelsTableId: 'ultimate-skill-levels-table' }
                ];
                
                skillTypes.forEach(type => {
                    const skillData = skills[type.key];
                    if (skillData) {
                        if (Array.isArray(skillData)) {
                            // 数组类型技能（战技、连携技、终结技）
                            skillData.forEach(skill => {
                                // 填充技能基本信息
                                const tableBody = document.getElementById(type.tableId);
                                if (tableBody) {
                                    const row = document.createElement('tr');
                                    row.innerHTML = `
                                        <td class="border p-2 text-center text-sm">${type.name}</td>
                                        <td class="border p-2 text-center text-sm">${skill.name}</td>
                                        <td class="border p-2 text-sm">${skill.description}</td>
                                    `;
                                    tableBody.appendChild(row);
                                }
                                
                                // 填充技能等级数据
                                const levelsTable = document.getElementById(type.levelsTableId);
                                if (levelsTable && skill.skill_level_data) {
                                    // 生成表头
                                    const headers = ['技能等级', ...skill.skill_level_data.map(item => item.key)];
                                    const thead = document.createElement('thead');
                                    thead.className = 'bg-gray-100';
                                    thead.innerHTML = `<tr>${headers.map(header => `<th class="border p-1 text-center">${header}</th>`).join('')}</tr>`;
                                    levelsTable.appendChild(thead);
                                    
                                    // 生成等级行
                                    const tbody = document.createElement('tbody');
                                    
                                    // 固定等级：RANK1-9、技能专精1-3
                                    const fixedRanks = ['RANK1', 'RANK2', 'RANK3', 'RANK4', 'RANK5', 'RANK6', 'RANK7', 'RANK8', 'RANK9', '技能专精1', '技能专精2', '技能专精3'];
                                    
                                    fixedRanks.forEach(rank => {
                                        // 转换rank为数据文件中的格式（rank1, rank2等）
                                        let dataKey = rank;
                                        if (rank.startsWith('RANK')) {
                                            dataKey = rank.toLowerCase();
                                        }
                                        
                                        const row = document.createElement('tr');
                                        const cells = [rank, ...skill.skill_level_data.map(item => item[dataKey] || '-')];
                                        row.innerHTML = cells.map(cell => `<td class="border p-1 text-center">${cell}</td>`).join('');
                                        tbody.appendChild(row);
                                    });
                                    
                                    levelsTable.appendChild(tbody);
                                }
                            });
                        } else {
                            // 单个技能（普通攻击）
                            // 填充技能基本信息
                            const tableBody = document.getElementById(type.tableId);
                            if (tableBody) {
                                const row = document.createElement('tr');
                                row.innerHTML = `
                                    <td class="border p-2 text-center text-sm">${type.name}</td>
                                    <td class="border p-2 text-center text-sm">${skillData.name}</td>
                                    <td class="border p-2 text-sm">${skillData.description}</td>
                                `;
                                tableBody.appendChild(row);
                            }
                            
                            // 填充技能等级数据
                            const levelsTable = document.getElementById(type.levelsTableId);
                            if (levelsTable && skillData.skill_level_data) {
                                // 生成表头
                                const headers = ['技能等级', ...skillData.skill_level_data.map(item => item.key)];
                                const thead = document.createElement('thead');
                                thead.className = 'bg-gray-100';
                                thead.innerHTML = `<tr>${headers.map(header => `<th class="border p-1 text-center">${header}</th>`).join('')}</tr>`;
                                levelsTable.appendChild(thead);
                                
                                // 生成等级行
                                const tbody = document.createElement('tbody');
                                
                                // 固定等级：RANK1-9、技能专精1-3
                                const fixedRanks = ['RANK1', 'RANK2', 'RANK3', 'RANK4', 'RANK5', 'RANK6', 'RANK7', 'RANK8', 'RANK9', '技能专精1', '技能专精2', '技能专精3'];
                                
                                fixedRanks.forEach(rank => {
                                    // 转换rank为数据文件中的格式（rank1, rank2等）
                                    let dataKey = rank;
                                    if (rank.startsWith('RANK')) {
                                        dataKey = rank.toLowerCase();
                                    }
                                    
                                    const row = document.createElement('tr');
                                    const cells = [rank, ...skillData.skill_level_data.map(item => item[dataKey] || '-')];
                                    row.innerHTML = cells.map(cell => `<td class="border p-1 text-center">${cell}</td>`).join('');
                                    tbody.appendChild(row);
                                });
                                
                                levelsTable.appendChild(tbody);
                            }
                        }
                    }
                });
            }
        }
        
        // 填充技能数据
        const skillsContainer = document.getElementById('skills-container');
        if (skills) {
            // 处理不同的数据结构
            if (Array.isArray(skills)) {
                // 标准数组结构
                skills.forEach(skill => {
                    const skillCard = document.createElement('div');
                    skillCard.className = 'bg-gray-50 rounded-lg p-4 mb-4';
                    
                    skillCard.innerHTML = `
                        <h3 class="text-md font-semibold mb-2">${skill.技能名字}</h3>
                        <p class="text-xs text-gray-600 mb-3">${skill.技能类型}</p>
                        <p class="text-sm mb-4">${skill.技能描述}</p>
                        ${skill.技能等级数据 ? `
                            <div class="overflow-x-auto">
                                <table class="w-full border-collapse text-xs">
                                    <thead class="bg-gray-100">
                                        <tr>
                                            <th class="border p-1 text-left">属性</th>
                                            <th class="border p-1 text-center">Rank 1</th>
                                            <th class="border p-1 text-center">Rank 7</th>
                                            <th class="border p-1 text-center">Rank 9</th>
                                            <th class="border p-1 text-center">专精 3</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${skill.技能等级数据.map(item => `
                                            <tr>
                                                <td class="border p-1">${item.key}</td>
                                                <td class="border p-1 text-center">${item.rank1}</td>
                                                <td class="border p-1 text-center">${item.rank7}</td>
                                                <td class="border p-1 text-center">${item.rank9}</td>
                                                <td class="border p-1 text-center">${item['技能专精3']}</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        ` : ''}
                    `;
                    
                    skillsContainer.appendChild(skillCard);
                });
            } else {
                // 管理员特殊对象结构
                const skillTypes = [
                    { key: 'normal_attack', name: '普通攻击' },
                    { key: 'tactical_skills', name: '战技', isArray: true },
                    { key: 'link_skills', name: '连携技', isArray: true },
                    { key: 'ultimate_skills', name: '终结技', isArray: true }
                ];
                
                skillTypes.forEach(type => {
                    const skillData = skills[type.key];
                    if (skillData) {
                        if (type.isArray && Array.isArray(skillData)) {
                            // 数组类型技能（战技、连携技、终结技）
                            skillData.forEach(skill => {
                                const skillCard = document.createElement('div');
                                skillCard.className = 'bg-gray-50 rounded-lg p-4 mb-4';
                                
                                skillCard.innerHTML = `
                                    <h3 class="text-md font-semibold mb-2">${skill.name}</h3>
                                    <p class="text-xs text-gray-600 mb-3">${type.name}</p>
                                    <p class="text-sm mb-4">${skill.description}</p>
                                    ${skill.skill_level_data ? `
                                        <div class="overflow-x-auto">
                                            <table class="w-full border-collapse text-xs">
                                                <thead class="bg-gray-100">
                                                    <tr>
                                                        <th class="border p-1 text-left">属性</th>
                                                        <th class="border p-1 text-center">Rank 1</th>
                                                        <th class="border p-1 text-center">Rank 7</th>
                                                        <th class="border p-1 text-center">Rank 9</th>
                                                        <th class="border p-1 text-center">专精 3</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    ${skill.skill_level_data.map(item => `
                                                        <tr>
                                                            <td class="border p-1">${item.key}</td>
                                                            <td class="border p-1 text-center">${item.rank1}</td>
                                                            <td class="border p-1 text-center">${item.rank7}</td>
                                                            <td class="border p-1 text-center">${item.rank9}</td>
                                                            <td class="border p-1 text-center">${item['技能专精3'] || item['专精 3'] || item['rank10']}</td>
                                                        </tr>
                                                    `).join('')}
                                                </tbody>
                                            </table>
                                        </div>
                                    ` : ''}
                                `;
                                
                                skillsContainer.appendChild(skillCard);
                            });
                        } else {
                            // 单个技能（普通攻击）
                            const skillCard = document.createElement('div');
                            skillCard.className = 'bg-gray-50 rounded-lg p-4 mb-4';
                            
                            skillCard.innerHTML = `
                                <h3 class="text-md font-semibold mb-2">${skillData.name}</h3>
                                <p class="text-xs text-gray-600 mb-3">${type.name}</p>
                                <p class="text-sm mb-4">${skillData.description}</p>
                                ${skillData.skill_level_data ? `
                                    <div class="overflow-x-auto">
                                        <table class="w-full border-collapse text-xs">
                                            <thead class="bg-gray-100">
                                                <tr>
                                                    <th class="border p-1 text-left">属性</th>
                                                    <th class="border p-1 text-center">Rank 1</th>
                                                    <th class="border p-1 text-center">Rank 7</th>
                                                    <th class="border p-1 text-center">Rank 9</th>
                                                    <th class="border p-1 text-center">专精 3</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${skillData.skill_level_data.map(item => `
                                                    <tr>
                                                        <td class="border p-1">${item.key}</td>
                                                        <td class="border p-1 text-center">${item.rank1}</td>
                                                        <td class="border p-1 text-center">${item.rank7}</td>
                                                        <td class="border p-1 text-center">${item.rank9}</td>
                                                        <td class="border p-1 text-center">${item['技能专精3'] || item['专精 3'] || item['rank10']}</td>
                                                    </tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    </div>
                                ` : ''}
                            `;
                            
                            skillsContainer.appendChild(skillCard);
                        }
                    }
                });
            }
        }
        
        // 填充天赋数据
        const talentsContainer = document.getElementById('talents-container');
        const talents = operator.ability_extension?.talents;
        if (talents) {
            talents.forEach(talent => {
                const talentCard = document.createElement('div');
                talentCard.className = 'bg-gray-50 rounded-lg p-4';
                
                // 处理不同的数据结构
                const talentName = talent.天赋名字 || talent.name;
                const talentDesc = talent.天赋描述 || talent.description;
                
                talentCard.innerHTML = `
                    <h3 class="text-md font-semibold mb-2">${talentName}</h3>
                    <p class="text-sm mb-3">${talentDesc}</p>
                    ${(talent.天赋等级数据 || talent.levels) ? `
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse text-xs">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th class="border p-1 text-left">等级</th>
                                        <th class="border p-1 text-center">效果</th>
                                        <th class="border p-1 text-center">条件</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${(talent.天赋等级数据 || talent.levels).map(item => `
                                        <tr>
                                            <td class="border p-1">${item.level || item.key}</td>
                                            <td class="border p-1 text-center">${item.value || item.rank1 || '-'}</td>
                                            <td class="border p-1 text-center">${item.condition || '-'}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    ` : ''}
                `;
                
                talentsContainer.appendChild(talentCard);
            });
        }
        
        // 填充潜能数据
        const potentialContainer = document.getElementById('potential-container');
        const potentials = operator.potential?.levels;
        if (potentials) {
            potentials.forEach(potential => {
                const potentialCard = document.createElement('div');
                potentialCard.className = 'bg-gray-50 rounded-lg p-4';
                
                potentialCard.innerHTML = `
                    <h3 class="text-md font-semibold mb-2">潜能 ${potential.潜能等级}：${potential.潜能名字}</h3>
                    <p class="text-sm">${potential.潜能内容}</p>
                `;
                
                potentialContainer.appendChild(potentialCard);
            });
        }
        
        // 填充档案资料
        const archiveContainer = document.getElementById('archive-container');
        const archiveDetails = operator.archive?.details;
        if (archiveDetails) {
            archiveDetails.forEach(detail => {
                const archiveCard = document.createElement('div');
                archiveCard.className = 'bg-gray-50 rounded-lg p-4';
                
                archiveCard.innerHTML = `
                    <h3 class="text-md font-semibold mb-2">${detail.type}</h3>
                    <p class="text-sm whitespace-pre-line">${detail.content}</p>
                `;
                
                archiveContainer.appendChild(archiveCard);
            });
        }
        
    } catch (error) {
        console.error('加载干员数据失败:', error);
        // 显示错误信息
        const errorElement = document.createElement('div');
        errorElement.className = 'bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg m-4';
        errorElement.textContent = `加载干员数据失败: ${error.message}`;
        document.querySelector('main').prepend(errorElement);
    }
}

// 初始化干员详情页
window.initOperatorDetail = function() {
    setupTabs();
    loadOperatorData();
};

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
    // 注意：loadOperatorData() 现在由 HTML 中的脚本在加载数据文件后调用
});