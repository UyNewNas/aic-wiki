// 武器数据加载与处理
let weaponsData = [];

// 根据星级获取不同颜色的星星SVG（与干员列表保持一致）
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

// 获取星级HTML（与干员列表保持一致）
function getRarityStars(stars) {
    let starHtml = '';
    for (let i = 0; i < stars; i++) {
        starHtml += getStarSVG(stars);
    }
    return starHtml;
}

// 预定义武器文件列表（避免使用fetch获取文件列表，支持静态页面）
const weaponFiles = [
    'weapon_100_嵌合正义.js',
    'weapon_101_O.B.J.尖峰.js',
    'weapon_102_向心之引.js',
    'weapon_103_负山.js',
    'weapon_104_骁勇.js',
    'weapon_105_J.E.T..js',
    'weapon_106_佩科5.js',
    'weapon_107_呼啸守卫.js',
    'weapon_108_长路.js',
    'weapon_109_作品：众生.js',
    'weapon_110_O.B.J.迅极.js',
    'weapon_111_理性告别.js',
    'weapon_112_艺术暴君.js',
    'weapon_113_领航者.js',
    'weapon_114_楔子.js',
    'weapon_115_同类相食.js',
    'weapon_116_吉米尼12.js',
    'weapon_117_全自动骇新星.js',
    'weapon_118_荧光雷羽.js',
    'weapon_119_悼亡诗.js',
    'weapon_120_莫奈何.js',
    'weapon_121_迷失荒野.js',
    'weapon_122_布道自由.js',
    'weapon_123_O.B.J.术识.js',
    'weapon_124_使命必达.js',
    'weapon_125_沧溟星梦.js',
    'weapon_126_作品：蚀迹.js',
    'weapon_127_爆破单元.js',
    'weapon_128_遗忘.js',
    'weapon_129_骑士精神.js',
    'weapon_58_塔尔11.js',
    'weapon_59_应急手段.js',
    'weapon_60_浪潮.js',
    'weapon_61_钢铁余音.js',
    'weapon_62_坚城铸造者.js',
    'weapon_63_逐鳞3.0.js',
    'weapon_64_十二问.js',
    'weapon_65_O.B.J.轻芒.js',
    'weapon_66_仰止.js',
    'weapon_67_宏愿.js',
    'weapon_68_不知归.js',
    'weapon_70_熔铸火焰.js',
    'weapon_71_黯色火炬.js',
    'weapon_72_扶摇.js',
    'weapon_73_热熔切割器.js',
    'weapon_74_显赫声名.js',
    'weapon_75_白夜新星.js',
    'weapon_76_达尔霍夫7.js',
    'weapon_77_工业零点一.js',
    'weapon_78_淬火者.js',
    'weapon_79_探骊.js',
    'weapon_80_古渠.js',
    'weapon_81_终点之声.js',
    'weapon_82_O.B.J.重荷.js',
    'weapon_83_大雷斑.js',
    'weapon_84_赫拉芬格.js',
    'weapon_85_典范.js',
    'weapon_86_昔日精品.js',
    'weapon_96_破碎君王.js',
    'weapon_97_奥佩罗77.js',
    'weapon_98_寻路者道标.js',
    'weapon_99_天使杀手.js'
];

// 加载所有武器文件
function loadWeaponsData() {
    const weaponsDir = 'weapons/';
    console.log('[log] 开始加载武器数据，总共', weaponFiles.length, '个武器文件');
    
    let loadedCount = 0;
    let successCount = 0;
    let errorCount = 0;
    
    // 加载每个武器文件
    weaponFiles.forEach((file, index) => {
        try {
            console.log('[log] 加载武器文件:', file);
            
            // 动态创建script标签加载武器文件
            const script = document.createElement('script');
            script.src = weaponsDir + file;
            script.async = true;
            
            script.onload = function() {
                loadedCount++;
                successCount++;
                console.log('[log] 武器文件加载成功:', file, '已加载', loadedCount, '/', weaponFiles.length, '成功:', successCount, '失败:', errorCount);
                
                // 当所有文件加载完成后，收集武器数据
                if (loadedCount === weaponFiles.length) {
                    console.log('[log] 所有武器文件加载完成，成功:', successCount, '失败:', errorCount);
                    collectWeaponsData();
                }
            };
            
            script.onerror = function() {
                loadedCount++;
                errorCount++;
                console.error('[error] 武器文件加载失败:', file, '已加载', loadedCount, '/', weaponFiles.length, '成功:', successCount, '失败:', errorCount);
                
                // 即使有文件加载失败，也要继续收集数据
                if (loadedCount === weaponFiles.length) {
                    console.log('[log] 所有武器文件加载完成，成功:', successCount, '失败:', errorCount);
                    collectWeaponsData();
                }
            };
            
            document.head.appendChild(script);
        } catch (error) {
            loadedCount++;
            errorCount++;
            console.error(`加载武器文件 ${file} 失败:`, error, '已加载', loadedCount, '/', weaponFiles.length, '成功:', successCount, '失败:', errorCount);
            
            if (loadedCount === weaponFiles.length) {
                console.log('[log] 所有武器文件加载完成，成功:', successCount, '失败:', errorCount);
                collectWeaponsData();
            }
        }
    });
}

// 收集武器数据
function collectWeaponsData() {
    console.log('[log] 开始收集武器数据');
    weaponsData = [];
    
    // 遍历所有武器文件，尝试从全局变量中获取武器数据
    weaponFiles.forEach(file => {
        try {
            // 生成变量名（移除.js后缀，处理文件名中的点号）
            let variableName = file.replace('.js', '');
            console.log('[log] 尝试获取武器变量:', variableName);
            
            // 尝试直接获取变量
            let weaponData = null;
            try {
                // 使用eval获取变量（处理带点号的变量名）
                weaponData = eval(variableName);
                console.log('[log] 成功获取武器数据:', variableName);
            } catch (e) {
                console.log('[error] eval获取武器数据失败:', e.message);
                // 尝试处理为下划线的版本
                const processedVariableName = variableName.replace(/\./g, '_');
                weaponData = window[processedVariableName];
                console.log('[log] 尝试处理后变量名:', processedVariableName, '数据:', weaponData);
                
                // 尝试处理中文冒号的版本
                if (!weaponData) {
                    const processedVariableName2 = variableName.replace(/：/g, '_');
                    weaponData = window[processedVariableName2];
                    console.log('[log] 尝试处理中文冒号后变量名:', processedVariableName2, '数据:', weaponData);
                }
                
                // 尝试处理混合版本
                if (!weaponData) {
                    const processedVariableName3 = variableName.replace(/\./g, '_').replace(/：/g, '_');
                    weaponData = window[processedVariableName3];
                    console.log('[log] 尝试处理混合后变量名:', processedVariableName3, '数据:', weaponData);
                }
            }
            
            if (weaponData) {
                weaponsData.push(weaponData);
                console.log('[log] 武器数据添加成功，当前武器数量:', weaponsData.length);
            } else {
                console.log('[error] 武器数据无效或不存在:', variableName);
            }
        } catch (error) {
            console.error(`收集武器数据 ${file} 失败:`, error);
        }
    });
    
    // 渲染武器列表
    console.log('[log] 武器数据收集完成，总共加载了', weaponsData.length, '个武器');
    console.log('[log] 武器数据:', weaponsData);
    renderWeaponsList();
}

// 渲染武器列表
function renderWeaponsList(typeFilter = 'all', rarityFilter = 'all', obtainFilter = 'all', abilityFilter = 'all', skillTypeFilter = 'all') {
    console.log('[log] 开始渲染武器列表...');
    console.log('[log] 武器数据数量:', weaponsData.length);
    console.log('[log] 筛选参数:', {typeFilter, rarityFilter, obtainFilter, abilityFilter, skillTypeFilter});
    
    const tableBody = document.getElementById('weapons-table-body');
    console.log('[log] tableBody 元素:', tableBody);
    if (!tableBody) {
        console.log('[error] tableBody 元素不存在');
        return;
    }
    
    tableBody.innerHTML = '';
    
    const filteredWeapons = weaponsData.filter(weapon => {
        // 检查武器数据结构
        console.log('[log] 检查武器数据结构:', weapon);
        
        // 处理不同的数据结构
        let cleanedData, weaponInfo, basicInfo, weaponSkills;
        
        // 如果武器数据直接包含 cleaned_data 属性
        if (weapon.cleaned_data) {
            cleanedData = weapon.cleaned_data;
        } else if (weapon.weapon?.cleaned_data) {
            // 如果武器数据嵌套在 weapon 属性中
            cleanedData = weapon.weapon.cleaned_data;
        } else {
            console.log('[error] 武器数据结构异常:', weapon);
            return false;
        }
        
        if (!cleanedData) {
            console.log('[error] 武器缺少 cleaned_data:', weapon);
            return false;
        }
        
        weaponInfo = cleanedData.weapon_info;
        basicInfo = cleanedData.basic_info;
        weaponSkills = cleanedData.weapon_skills_and_matrices;
        
        console.log('[log] 武器 cleaned_data:', cleanedData);
        console.log('[log] 武器 weaponInfo:', weaponInfo);
        console.log('[log] 武器 basicInfo:', basicInfo);
        
        if (!weaponInfo || !basicInfo) {
            console.log('[error] 武器缺少 weaponInfo 或 basicInfo:', weapon);
            return false;
        }
        
        // 武器类型筛选
        if (typeFilter !== 'all') {
            const weaponType = weaponInfo.weapon_type || '';
            console.log('[log] 武器类型:', weaponType);
            console.log('[log] 筛选类型:', typeFilter);
            // 武器类型映射（中文到英文）
            const weaponTypeMap = {
                'sword': ['单手剑'],
                'greatsword': ['双手剑'],
                'spear': ['长柄武器'],
                'staff': ['施术单元'],
                'pistol': ['手铳']
            };
            const matchingTypes = weaponTypeMap[typeFilter] || [];
            console.log('[log] 匹配类型:', matchingTypes);
            const isMatch = matchingTypes.some(type => weaponType.includes(type));
            console.log('[log] 类型匹配结果:', isMatch);
            if (!isMatch) {
                console.log('[log] 武器类型不匹配，跳过:', weaponInfo.weapon_name);
                return false;
            }
        }
        
        // 星级筛选
        if (rarityFilter !== 'all') {
            console.log('[log] 武器星级:', weaponInfo.weapon_star);
            console.log('[log] 筛选星级:', rarityFilter);
            if (weaponInfo.weapon_star !== rarityFilter) return false;
        }
        
        // 获取方式筛选
        if (obtainFilter !== 'all') {
            const obtainMethod = basicInfo.obtain_method?.toLowerCase() || '';
            console.log('[log] 获取方式:', obtainMethod);
            console.log('[log] 筛选获取方式:', obtainFilter);
            if (!obtainMethod.includes(obtainFilter)) return false;
        }
        
        // 能力提升类型筛选
        if (abilityFilter !== 'all') {
            if (!weaponSkills?.skill_details) return false;
            // 只检查前两个提升词条
            const firstTwoSkills = weaponSkills.skill_details.slice(0, 2);
            const hasAbilitySkill = firstTwoSkills.some(skill => {
                const skillName = skill.skill_name?.toLowerCase() || '';
                console.log('[log] 技能名称:', skillName);
                // 能力提升类型映射（英文到中文）
                const abilityMap = {
                    'strength': ['力量'],
                    'agility': ['敏捷'],
                    'intelligence': ['智识'],
                    'will': ['意志']
                };
                const matchingAbilities = abilityMap[abilityFilter] || [];
                console.log('[log] 匹配能力:', matchingAbilities);
                return matchingAbilities.some(ability => skillName.includes(ability));
            });
            console.log('[log] 能力匹配结果:', hasAbilitySkill);
            if (!hasAbilitySkill) return false;
        }
        
        // 技能类型筛选
        if (skillTypeFilter !== 'all') {
            if (!weaponSkills?.skill_details) return false;
            // 检查最后一个技能词条
            const lastSkill = weaponSkills.skill_details[weaponSkills.skill_details.length - 1];
            if (!lastSkill) return false;
            const skillName = lastSkill.skill_name?.toLowerCase() || '';
            console.log('[log] 最后一个技能名称:', skillName);
            switch (skillTypeFilter) {
                case 'basic':
                    return skillName.includes('提升');
                case 'damage':
                    return skillName.includes('伤害') || skillName.includes('攻击');
                case 'special':
                    return !skillName.includes('提升') && !skillName.includes('伤害') && !skillName.includes('攻击');
                default:
                    return true;
            }
        }
        
        return true;
    });
    
    console.log('[log] 筛选后武器数量:', filteredWeapons.length);
    
    // 排序武器列表：实装时间倒序，星级倒序，up倒序
    filteredWeapons.sort((a, b) => {
        // 处理数据结构
        let aCleanedData, bCleanedData;
        if (a.cleaned_data) {
            aCleanedData = a.cleaned_data;
        } else if (a.weapon?.cleaned_data) {
            aCleanedData = a.weapon.cleaned_data;
        }
        if (b.cleaned_data) {
            bCleanedData = b.cleaned_data;
        } else if (b.weapon?.cleaned_data) {
            bCleanedData = b.weapon.cleaned_data;
        }
        
        // 实装时间倒序（默认都是2026-01-22，所以这里影响不大）
        const aReleaseDate = '2026-01-22';
        const bReleaseDate = '2026-01-22';
        if (aReleaseDate !== bReleaseDate) {
            return bReleaseDate.localeCompare(aReleaseDate);
        }
        
        // 星级倒序
        const aStars = parseInt(aCleanedData?.weapon_info?.weapon_star) || 0;
        const bStars = parseInt(bCleanedData?.weapon_info?.weapon_star) || 0;
        if (aStars !== bStars) {
            return bStars - aStars;
        }
        
        // up倒序（假设up武器的获取方式包含"up"或"UP"）
        const aObtain = aCleanedData?.basic_info?.obtain_method?.toLowerCase() || '';
        const bObtain = bCleanedData?.basic_info?.obtain_method?.toLowerCase() || '';
        const aIsUp = aObtain.includes('up') || aObtain.includes('精选');
        const bIsUp = bObtain.includes('up') || bObtain.includes('精选');
        if (aIsUp !== bIsUp) {
            return aIsUp ? -1 : 1;
        }
        
        return 0;
    });
    
    filteredWeapons.forEach((weapon, index) => {
        console.log(`[log] 正在渲染武器 ${index + 1}:`, weapon);
        
        // 处理不同的数据结构
        let cleanedData, weaponInfo, basicInfo, weaponSkills;
        
        // 如果武器数据直接包含 cleaned_data 属性
        if (weapon.cleaned_data) {
            cleanedData = weapon.cleaned_data;
            console.log(`[log] 武器 ${index + 1} 使用直接 cleaned_data`);
        } else if (weapon.weapon?.cleaned_data) {
            // 如果武器数据嵌套在 weapon 属性中
            cleanedData = weapon.weapon.cleaned_data;
            console.log(`[log] 武器 ${index + 1} 使用嵌套 cleaned_data`);
        } else {
            console.log(`[error] 武器 ${index + 1} 数据结构异常`);
            return;
        }
        
        console.log(`[log] 武器 ${index + 1} cleaned_data:`, cleanedData);
        if (!cleanedData) {
            console.log(`[error] 武器 ${index + 1} 缺少 cleaned_data`);
            return;
        }
        
        weaponInfo = cleanedData.weapon_info;
        basicInfo = cleanedData.basic_info;
        weaponSkills = cleanedData.weapon_skills_and_matrices;
        
        console.log(`[log] 武器 ${index + 1} weaponInfo:`, weaponInfo);
        console.log(`[log] 武器 ${index + 1} basicInfo:`, basicInfo);
        
        if (!weaponInfo || !basicInfo) {
            console.log(`[error] 武器 ${index + 1} 缺少 weaponInfo 或 basicInfo`);
            return;
        }
        
        console.log(`[log] 武器 ${index + 1} 开始渲染表格行`);
        
        const row = document.createElement('tr');
        
        // 武器图片
        const iconCell = document.createElement('td');
        iconCell.className = 'border p-2 text-center';
        if (weaponInfo.weapon_image) {
            const img = document.createElement('img');
            // 将外部图片路径改为本地路径
            let imagePath = weaponInfo.weapon_image;
            if (imagePath.includes('bbs.hycdn.cn')) {
                // 提取图片文件名
                const fileName = imagePath.split('/').pop();
                imagePath = `./images/weapons/${fileName}`;
            }
            img.src = imagePath;
            img.alt = weaponInfo.weapon_name;
            img.className = 'w-12 h-12 object-contain mx-auto';
            iconCell.appendChild(img);
        }
        row.appendChild(iconCell);
        
        // 武器名字
        const nameCell = document.createElement('td');
        nameCell.className = 'border p-2 text-center';
        const weaponId = weapon.itemId || weapon.weapon?.itemId;
        if (weaponId) {
            const nameLink = document.createElement('a');
            nameLink.href = `weapon-detail.html?id=${weaponId}`;
            nameLink.className = 'text-primary hover:underline';
            nameLink.textContent = weaponInfo.weapon_name || '未知';
            nameCell.appendChild(nameLink);
        } else {
            nameCell.textContent = weaponInfo.weapon_name || '未知';
        }
        row.appendChild(nameCell);
        
        // 武器星级
        const starCell = document.createElement('td');
        starCell.className = 'border p-2 text-center';
        const stars = parseInt(weaponInfo.weapon_star) || 0;
        const starIcons = getRarityStars(stars);
        // 创建一个容器来确保星星横向排列
        const starContainer = document.createElement('div');
        starContainer.className = 'flex items-center justify-center';
        starContainer.innerHTML = starIcons;
        starCell.appendChild(starContainer);
        row.appendChild(starCell);
        
        // 武器类型
        const typeCell = document.createElement('td');
        typeCell.className = 'border p-2 text-center';
        typeCell.textContent = weaponInfo.weapon_type || '未知';
        row.appendChild(typeCell);
        
        // 基础攻击力（使用满级基础攻击力）
        const attackCell = document.createElement('td');
        attackCell.className = 'border p-2 text-center text-xs';
        const maxAttack = basicInfo.max_level_panel?.base_attack || basicInfo.initial_panel?.base_attack || '未知';
        attackCell.textContent = maxAttack;
        row.appendChild(attackCell);
        
        // 获取方式
        const obtainCell = document.createElement('td');
        obtainCell.className = 'border p-2 text-center text-xs';
        obtainCell.textContent = basicInfo.obtain_method || '未知';
        row.appendChild(obtainCell);
        
        // 武器词条技能
        const skillsCell = document.createElement('td');
        skillsCell.className = 'border p-2 text-center text-xs';
        let skillsText = '未知';
        if (weaponSkills?.skill_details && weaponSkills.skill_details.length > 0) {
            const skillNames = weaponSkills.skill_details.map(skill => skill.skill_name).filter(Boolean);
            if (skillNames.length >= 3) {
                skillsText = `${skillNames[0]} ${skillNames[1]} ${skillNames[2]}`;
            } else if (skillNames.length >= 2) {
                skillsText = `${skillNames[0]} ${skillNames[1]}`;
            } else if (skillNames.length >= 1) {
                skillsText = skillNames[0];
            }
        }
        skillsCell.textContent = skillsText;
        row.appendChild(skillsCell);
        
        // 实装时间（默认值为2026年1月22日）
        const releaseCell = document.createElement('td');
        releaseCell.className = 'border p-2 text-center text-xs';
        releaseCell.textContent = '2026-01-22';
        row.appendChild(releaseCell);
        
        tableBody.appendChild(row);
    });
    
    // 更新分页信息
    const weaponCount = filteredWeapons.length;
    const paginationInfo = document.querySelector('.text-sm.text-gray-500');
    if (paginationInfo) {
        paginationInfo.innerHTML = `显示 <span class="font-medium">1</span> 到 <span class="font-medium">${Math.min(weaponCount, 6)}</span> 共 <span class="font-medium">${weaponCount}</span> 个武器`;
    }
}

// 应用筛选
function applyWeaponFilter() {
    const typeFilter = document.getElementById('weapon-type-filter')?.value || 'all';
    const rarityFilter = document.getElementById('weapon-rarity-filter')?.value || 'all';
    const obtainFilter = document.getElementById('weapon-obtain-filter')?.value || 'all';
    const abilityFilter = document.getElementById('weapon-ability-filter')?.value || 'all';
    const skillTypeFilter = document.getElementById('weapon-skill-type-filter')?.value || 'all';
    
    // 渲染筛选后的武器列表
    renderWeaponsList(typeFilter, rarityFilter, obtainFilter, abilityFilter, skillTypeFilter);
}

// 重置筛选
function resetWeaponFilter() {
    const typeFilter = document.getElementById('weapon-type-filter');
    if (typeFilter) typeFilter.value = 'all';
    
    const rarityFilter = document.getElementById('weapon-rarity-filter');
    if (rarityFilter) rarityFilter.value = 'all';
    
    const obtainFilter = document.getElementById('weapon-obtain-filter');
    if (obtainFilter) obtainFilter.value = 'all';
    
    const abilityFilter = document.getElementById('weapon-ability-filter');
    if (abilityFilter) abilityFilter.value = 'all';
    
    const skillTypeFilter = document.getElementById('weapon-skill-type-filter');
    if (skillTypeFilter) skillTypeFilter.value = 'all';
    
    renderWeaponsList();
}

// 页面加载完成后初始化
console.log('[log] weapons.js 脚本加载成功');
window.addEventListener('DOMContentLoaded', function() {
    console.log('[log] DOMContentLoaded 事件触发');
    // 加载武器数据
    console.log('[log] 开始加载武器数据...');
    loadWeaponsData();
    
    // 绑定筛选按钮事件
    const applyFilterBtn = document.getElementById('apply-weapon-filter');
    const resetFilterBtn = document.getElementById('reset-weapon-filter');
    console.log('[log] applyFilterBtn 元素:', applyFilterBtn);
    console.log('[log] resetFilterBtn 元素:', resetFilterBtn);
    
    if (applyFilterBtn) {
        applyFilterBtn.addEventListener('click', applyWeaponFilter);
        console.log('[log] 筛选按钮事件绑定成功');
    }
    if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', resetWeaponFilter);
        console.log('[log] 重置按钮事件绑定成功');
    }
});
