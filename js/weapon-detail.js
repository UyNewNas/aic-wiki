// 武器详情页面逻辑

// 根据星级获取不同颜色的星星SVG（与武器列表保持一致）
function getStarSVG(starLevel) {
    let primaryColor, secondaryColor, tertiaryColor;
    
    switch(starLevel) {
        case 6:
            primaryColor = '#FF9500'; // 橙色
            secondaryColor = '#CC7A00';
            tertiaryColor = '#FFB74D';
            break;
        case 5:
            primaryColor = '#FDE047'; // 黄色
            secondaryColor = '#EAB308';
            tertiaryColor = '#FACC15';
            break;
        case 4:
            primaryColor = '#9333EA'; // 紫色
            secondaryColor = '#7E22CE';
            tertiaryColor = '#A855F7';
            break;
        case 3:
            primaryColor = '#60A5FA'; // 淡蓝色
            secondaryColor = '#3B82F6';
            tertiaryColor = '#93C5FD';
            break;
        default:
            primaryColor = '#FDE047'; // 默认黄色
            secondaryColor = '#EAB308';
            tertiaryColor = '#FACC15';
    }
    
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="OperatorEditCard__Rank-ilQzgD dcsdby w-4 h-4">
<g fill-rule="evenodd" clip-path="url(#rank_svg__a)" clip-rule="evenodd">
<path fill="${primaryColor}" d="m5.845 17.424 6.369-3.667L9.605 9.25.87 14.28zm17.249.69-6.37-3.678-2.608 4.519 8.736 5.043zM20.417 0 15.2 2.686v7.07h5.217z" opacity="0.6">
</path>
<path fill="${secondaryColor}" d="m8.298 16.03 3.765-2.174-2.609-4.518-1.957 1.13s2.051 4.325.8 5.562m12.343.668-3.765-2.174-2.61 4.518 1.959 1.13s2.72-3.939 4.416-3.474m-.224-9.202S15.49 7.266 15.2 5.41v4.348h5.217z" opacity="0.502"></path>
<path fill="${tertiaryColor}" d="m13.922 9.77-.136-6.147L9.42 6.145l.008 6.622c.29 2.125-1.28 3.35-1.28 3.35l4.519-2.61c1.53-1.238 1.256-3.737 1.256-3.737m3.887 3.639 5.391 2.957v-5.044l-5.74-3.304c-2.141-.655-2.26-2.783-2.26-2.783v5.217c.15 2.103 2.609 2.957 2.609 2.957m-5.4 1.547-5.257 3.191 4.368 2.522 5.731-3.318c1.695-1.314 3.54-.567 3.54-.567l-4.518-2.608c-1.839-.707-3.865.78-3.865.78">
</path>
</g>
<defs>
<clipPath id="rank_svg__a"><path fill="#fff" d="M0 0h24v24H0z">
</path></clipPath></defs></svg>`;
}

// 获取星级HTML（与武器列表保持一致）
function getRarityStars(stars) {
    let starHtml = '';
    for (let i = 0; i < stars; i++) {
        starHtml += getStarSVG(stars);
    }
    return starHtml;
}

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

// 从URL参数中获取武器ID，支持id和itemId参数
function getWeaponId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || urlParams.get('itemId') || '110'; // 默认加载O.B.J.迅极的数据
}

// 获取武器数据
function getWeaponData() {
    const weaponId = getWeaponId();
    
    // 预定义的全局变量名映射，根据实际文件命名添加
    const globalVarMap = {
        '110': 'weapon_110_OBJ迅极',
        '100': 'weapon_100_嵌合正义',
        '101': 'weapon_101_O.B.J.尖峰',
        '102': 'weapon_102_向心之引',
        '103': 'weapon_103_负山',
        '104': 'weapon_104_骁勇',
        '105': 'weapon_105_J.E.T.',
        '106': 'weapon_106_佩科5',
        '107': 'weapon_107_呼啸守卫',
        '108': 'weapon_108_长路',
        '109': 'weapon_109_作品：众生',
        '111': 'weapon_111_理性告别',
        '112': 'weapon_112_艺术暴君',
        '113': 'weapon_113_领航者',
        '114': 'weapon_114_楔子',
        '115': 'weapon_115_同类相食',
        '116': 'weapon_116_吉米尼12',
        '117': 'weapon_117_全自动骇新星',
        '118': 'weapon_118_荧光雷羽',
        '119': 'weapon_119_悼亡诗',
        '120': 'weapon_120_莫奈何',
        '121': 'weapon_121_迷失荒野',
        '122': 'weapon_122_布道自由',
        '123': 'weapon_123_O.B.J.术识',
        '124': 'weapon_124_使命必达',
        '125': 'weapon_125_沧溟星梦',
        '126': 'weapon_126_作品：蚀迹',
        '127': 'weapon_127_爆破单元',
        '128': 'weapon_128_遗忘',
        '129': 'weapon_129_骑士精神',
        '58': 'weapon_58_塔尔11',
        '59': 'weapon_59_应急手段',
        '60': 'weapon_60_浪潮',
        '61': 'weapon_61_钢铁余音',
        '62': 'weapon_62_坚城铸造者',
        '63': 'weapon_63_逐鳞3.0',
        '64': 'weapon_64_十二问',
        '65': 'weapon_65_O.B.J.轻芒',
        '66': 'weapon_66_仰止',
        '67': 'weapon_67_宏愿',
        '68': 'weapon_68_不知归',
        '70': 'weapon_70_熔铸火焰',
        '71': 'weapon_71_黯色火炬',
        '72': 'weapon_72_扶摇',
        '73': 'weapon_73_热熔切割器',
        '74': 'weapon_74_显赫声名',
        '75': 'weapon_75_白夜新星',
        '76': 'weapon_76_达尔霍夫7',
        '77': 'weapon_77_工业零点一',
        '78': 'weapon_78_淬火者',
        '79': 'weapon_79_探骊',
        '80': 'weapon_80_古渠',
        '81': 'weapon_81_终点之声',
        '82': 'weapon_82_O.B.J.重荷',
        '83': 'weapon_83_大雷斑',
        '84': 'weapon_84_赫拉芬格',
        '85': 'weapon_85_典范',
        '86': 'weapon_86_昔日精品',
        '96': 'weapon_96_破碎君王',
        '97': 'weapon_97_奥佩罗77',
        '98': 'weapon_98_寻路者道标',
        '99': 'weapon_99_天使杀手'
    };
    
    // 获取全局变量名
    const globalVarName = globalVarMap[weaponId] || `weapon_${weaponId}`;
    console.log('尝试获取武器数据:', weaponId, '全局变量名:', globalVarName);
    // 从全局变量中获取武器数据
    const weaponData = window[globalVarName];
    console.log('获取到的武器数据:', weaponData);
    
    if (!weaponData) {
        throw new Error(`未找到武器数据: ${weaponId} (尝试的全局变量: ${globalVarName})`);
    }
    
    return weaponData;
}

// 加载武器数据
function loadWeaponData() {
    try {
        const weaponData = getWeaponData();
        const weapon = weaponData.cleaned_data;
        
        // 填充基本信息
        document.getElementById('weapon-name').textContent = weaponData.weapon?.name || weapon.weapon_info?.weapon_name;
        
        // 填充星级和类型，使用星级图标
        const weaponClassElement = document.getElementById('weapon-class');
        if (weaponClassElement) {
            const stars = parseInt(weapon.weapon_info?.weapon_star) || 0;
            const starIcons = getRarityStars(stars);
            // 创建一个容器来确保星星横向排列
            const starContainer = document.createElement('div');
            starContainer.className = 'flex items-center';
            starContainer.innerHTML = `${starIcons} <span class="ml-2">${weapon.weapon_info?.weapon_type}</span>`;
            weaponClassElement.innerHTML = '';
            weaponClassElement.appendChild(starContainer);
        }
        
        // 设置武器图标
        const weaponIconElement = document.getElementById('weapon-icon');
        console.log('武器图标容器元素:', weaponIconElement);
        
        if (weaponIconElement) {
            // 清除默认的图标
            weaponIconElement.innerHTML = '';
            
            // 创建武器图标图片元素
            const weaponImg = document.createElement('img');
            
            // 尝试从当前武器数据中获取图标图片
            let weaponImgUrl = weaponData.weapon?.image || weapon.weapon_info?.weapon_image || '';
            
            console.log('武器数据:', weaponData);
            console.log('尝试加载武器图标:', weaponImgUrl);
            
            if (weaponImgUrl) {
                weaponImg.src = weaponImgUrl;
                weaponImg.alt = weaponData.weapon?.name || weapon.weapon_info?.weapon_name;
                weaponImg.className = 'w-full h-full object-contain rounded-full';
                
                // 添加错误处理
                weaponImg.onerror = function() {
                    console.error('武器图标加载失败:', weaponImgUrl);
                    weaponIconElement.innerHTML = '<i class="fa fa-crosshairs text-4xl text-primary/30"></i>';
                };
                
                weaponIconElement.appendChild(weaponImg);
                console.log('武器图标图片元素已添加:', weaponImg);
            } else {
                // 如果没有图标图片，显示默认图标
                console.log('未找到武器图标图片');
                weaponIconElement.innerHTML = '<i class="fa fa-crosshairs text-4xl text-primary/30"></i>';
            }
        } else {
            console.error('未找到武器图标容器元素');
        }
        
        // 填充武器基本信息
        document.getElementById('weapon-type').textContent = weapon.weapon_info?.weapon_type;
        document.getElementById('weapon-rarity').textContent = weapon.weapon_info?.weapon_star;
        document.getElementById('weapon-obtain').textContent = weapon.basic_info?.obtain_method;
        document.getElementById('weapon-intro').textContent = weapon.weapon_info?.weapon_intro;
        
        // 填充基础属性表数据
        // 基础攻击力
        document.getElementById('base-attack-1').textContent = weapon.basic_info?.initial_panel?.base_attack || '...';
        document.getElementById('base-attack-20').textContent = weapon.upgrade_materials?.materials_list?.find(item => item.level_requirement === '20')?.skills?.split('突破前：基础攻击力 ')[1]?.split('，')[0] || '...';
        document.getElementById('base-attack-40').textContent = weapon.upgrade_materials?.materials_list?.find(item => item.level_requirement === '40')?.skills?.split('突破前：基础攻击力 ')[1]?.split('，')[0] || '...';
        document.getElementById('base-attack-60').textContent = weapon.upgrade_materials?.materials_list?.find(item => item.level_requirement === '60')?.skills?.split('突破前：基础攻击力 ')[1]?.split('，')[0] || '...';
        document.getElementById('base-attack-80').textContent = weapon.upgrade_materials?.materials_list?.find(item => item.level_requirement === '80')?.skills?.split('突破前：基础攻击力 ')[1]?.split('，')[0] || '...';
        document.getElementById('base-attack-90').textContent = weapon.basic_info?.max_level_panel?.base_attack || '...';
        
        // 需求材料
        document.getElementById('materials-1').textContent = '-';
        document.getElementById('materials-20').textContent = weapon.upgrade_materials?.materials_list?.find(item => item.level_requirement === '20')?.required_materials || '...';
        document.getElementById('materials-40').textContent = weapon.upgrade_materials?.materials_list?.find(item => item.level_requirement === '40')?.required_materials || '...';
        document.getElementById('materials-60').textContent = weapon.upgrade_materials?.materials_list?.find(item => item.level_requirement === '60')?.required_materials || '...';
        document.getElementById('materials-80').textContent = weapon.upgrade_materials?.materials_list?.find(item => item.level_requirement === '80')?.required_materials || '...';
        document.getElementById('materials-90').textContent = weapon.upgrade_materials?.materials_list?.find(item => item.level_requirement === '80')?.required_materials || '...';
        
        // 技能
        document.getElementById('skills-1').textContent = weapon.basic_info?.initial_panel?.attributes?.map(attr => `${attr.name}: ${attr.level}(${attr.effect})`).join('\n') || '...';
        document.getElementById('skills-20').textContent = weapon.upgrade_materials?.materials_list?.find(item => item.level_requirement === '20')?.skills?.split('突破后：基础攻击力 ')[1]?.split('，')?.slice(1)?.join('\n') || '...';
        document.getElementById('skills-40').textContent = weapon.upgrade_materials?.materials_list?.find(item => item.level_requirement === '40')?.skills?.split('突破后：基础攻击力 ')[1]?.split('，')?.slice(1)?.join('\n') || '...';
        document.getElementById('skills-60').textContent = weapon.upgrade_materials?.materials_list?.find(item => item.level_requirement === '60')?.skills?.split('突破后：基础攻击力 ')[1]?.split('，')?.slice(1)?.join('\n') || '...';
        document.getElementById('skills-80').textContent = weapon.upgrade_materials?.materials_list?.find(item => item.level_requirement === '80')?.skills?.split('突破后：基础攻击力 ')[1]?.split('，')?.slice(1)?.join('\n') || '...';
        document.getElementById('skills-90').textContent = weapon.basic_info?.max_level_panel?.attributes?.map(attr => `${attr.name}: ${attr.level}(${attr.effect})`).join('\n') || '...';
        
        // 填充武器技能数据
        const skillsContainer = document.getElementById('skills-container');
        if (skillsContainer) {
            skillsContainer.innerHTML = '';
            const skillDetails = weapon.weapon_skills_and_matrices?.skill_details;
            if (skillDetails && Array.isArray(skillDetails)) {
                skillDetails.forEach(skill => {
                    const skillCard = document.createElement('div');
                    skillCard.className = 'bg-gray-50 rounded-lg p-4';
                    
                    skillCard.innerHTML = `
                        <h3 class="text-md font-semibold mb-2">${skill.skill_name}</h3>
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse text-xs">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th class="border p-1 text-left">技能等级</th>
                                        <th class="border p-1 text-center">Rank 1</th>
                                        <th class="border p-1 text-center">Rank 2</th>
                                        <th class="border p-1 text-center">Rank 3</th>
                                        <th class="border p-1 text-center">Rank 4</th>
                                        <th class="border p-1 text-center">Rank 5</th>
                                        <th class="border p-1 text-center">Rank 6</th>
                                        <th class="border p-1 text-center">Rank 7</th>
                                        <th class="border p-1 text-center">Rank 8</th>
                                        <th class="border p-1 text-center">Rank 9</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border p-1">效果</td>
                                        <td class="border p-1 text-center">${skill.rank1 || '-'}</td>
                                        <td class="border p-1 text-center">${skill.rank2 || '-'}</td>
                                        <td class="border p-1 text-center">${skill.rank3 || '-'}</td>
                                        <td class="border p-1 text-center">${skill.rank4 || '-'}</td>
                                        <td class="border p-1 text-center">${skill.rank5 || '-'}</td>
                                        <td class="border p-1 text-center">${skill.rank6 || '-'}</td>
                                        <td class="border p-1 text-center">${skill.rank7 || '-'}</td>
                                        <td class="border p-1 text-center">${skill.rank8 || '-'}</td>
                                        <td class="border p-1 text-center">${skill.rank9 || '-'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `;
                    
                    skillsContainer.appendChild(skillCard);
                });
            } else {
                skillsContainer.innerHTML = '<p class="text-sm text-gray-500">无技能数据</p>';
            }
        }
        
        // 填充推荐矩阵
        document.getElementById('recommended-matrices').textContent = weapon.weapon_skills_and_matrices?.recommended_matrices || '无推荐矩阵';
        
        // 填充升级材料数据
        const upgradeMaterialsContainer = document.getElementById('upgrade-materials-container');
        if (upgradeMaterialsContainer) {
            upgradeMaterialsContainer.innerHTML = '';
            const materialsList = weapon.upgrade_materials?.materials_list;
            if (materialsList && Array.isArray(materialsList)) {
                materialsList.forEach(material => {
                    const materialCard = document.createElement('div');
                    materialCard.className = 'bg-gray-50 rounded-lg p-4';
                    
                    materialCard.innerHTML = `
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="text-md font-semibold">阶段 ${material.phase}</h3>
                            <span class="text-sm bg-blue-600/10 text-blue-600 px-2 py-1 rounded">等级 ${material.level_requirement}</span>
                        </div>
                        <div class="mb-3">
                            <h4 class="text-sm font-medium text-gray-600 mb-1">所需材料</h4>
                            <p class="text-sm">${material.required_materials}</p>
                        </div>
                        <div>
                            <h4 class="text-sm font-medium text-gray-600 mb-1">技能变化</h4>
                            <p class="text-sm text-gray-700 whitespace-pre-line">${material.skills}</p>
                        </div>
                    `;
                    
                    upgradeMaterialsContainer.appendChild(materialCard);
                });
            } else {
                upgradeMaterialsContainer.innerHTML = '<p class="text-sm text-gray-500">无升级材料数据</p>';
            }
        }
        
        // 填充武器档案
        document.getElementById('archive-content').textContent = weapon.archive?.basic_info || '无武器档案内容';
        
    } catch (error) {
        console.error('加载武器数据失败:', error);
        // 显示错误信息
        const errorElement = document.createElement('div');
        errorElement.className = 'bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg m-4';
        errorElement.textContent = `加载武器数据失败: ${error.message}`;
        document.querySelector('main').prepend(errorElement);
    }
}

// 初始化武器详情页
window.initWeaponDetail = function() {
    setupTabs();
    loadWeaponData();
};

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
    // 注意：loadWeaponData() 现在由 HTML 中的脚本在加载数据文件后调用
});