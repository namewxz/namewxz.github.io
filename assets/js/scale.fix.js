function fixScale(doc) {
    var addEvent = 'addEventListener',
        type     = 'gesturestart',
        qsa      = 'querySelectorAll',
        scales   = [1, 1],
        meta     = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

    function fix() {
        meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
        doc.removeEventListener(type, fix, true);
    }

    if ((meta = meta[meta.length - 1]) && addEvent in doc) {
        fix();
        scales = [.25, 1.6];
        doc[addEvent](type, fix, true);
    }
}

// 移动端导航交互功能
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const body = document.body;
    
    // 移动端菜单切换
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            body.classList.toggle('nav-open');
        });
    }
    
    // 点击文档关闭菜单
    document.addEventListener('click', function(e) {
        const isNavOpen = body.classList.contains('nav-open');
        const clickedInsideNav = e.target.closest('.main-nav');
        const clickedToggle = e.target.closest('.menu-toggle');
        
        if (isNavOpen && !clickedInsideNav && !clickedToggle) {
            body.classList.remove('nav-open');
        }
    });
    
    // 移动端子菜单交互
    const hasSubnav = document.querySelectorAll('.has-subnav');
    hasSubnav.forEach(item => {
        const link = item.querySelector('.nav-link');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const isOpen = item.classList.contains('subnav-open');
                
                // 关闭其他打开的子菜单
                hasSubnav.forEach(el => {
                    if (el !== item && el.classList.contains('subnav-open')) {
                        el.classList.remove('subnav-open');
                    }
                });
                
                // 切换当前子菜单
                item.classList.toggle('subnav-open', !isOpen);
            }
        });
    });
    
    // 屏幕尺寸变化时重置菜单状态
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            body.classList.remove('nav-open');
            
            // 关闭所有移动端子菜单
            hasSubnav.forEach(item => {
                item.classList.remove('subnav-open');
            });
        }
    });
});

// 原有的元素显示/切换功能
function showOrHideEl(selector) {
    var el = document.querySelector(selector);
    if (el.style.display === "block") {
        el.style.display = "none";
    } else {
        el.style.display = "block";
    }
}