// KATEGORIE

const menu = document.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu-item");


const expandCollapseCategory = (e) => {
    const expandButton = e.currentTarget;
    const menuCategory = expandButton.parentNode;
    const children = menuCategory.querySelector(".children");

    children.classList.toggle("hidden");
}

menuItems.forEach((el) => {
    if (el.children.length > 1) {
    el.querySelector("a").addEventListener("click", expandCollapseCategory);
    }
})

// WYSZUKIWARKA

const searchItems = (e) =>{
    const getAllOptions = document.querySelectorAll('.menu-item');
    const HideAllNavOptions = document.querySelectorAll('.navigation-list-item');

    HideAllNavOptions.forEach(el=>{
        if(el.classList.contains("hidden")){
            
        }else{
            el.classList.add("hidden");
        }
    })


    getAllOptions.forEach(el =>{

        const directElement = el.querySelector('a');

        if(directElement.textContent.toLocaleLowerCase()
        .includes(e.currentTarget.value.toLocaleLowerCase())){
            
            el.closest(".navigation-list-item").classList.remove("hidden");

        } else {
        
        }
        
    })
}
const searchBar = document.querySelector(".search-bar");
searchBar.addEventListener('input', searchItems);
   

// SIDEBAR
const toggleSideBar = document.querySelector(".toggleSidebar");
const sidebar = document.getElementById('sidebar');
const sidebarBottom = document.getElementById('bottom');
const page = document.getElementById('page');


const expandCollapseSideBar = () => {
    sidebar.classList.toggle('sidebar-collapse');
    sidebarBottom.classList.toggle('sidebar-bottom-collapse');
    page.classList.toggle('content-collapse');
    toggleSideBar.classList.toggle('btn-collapse');
    toggleSideBar.classList.toggle('text-clipped');
}

toggleSideBar.addEventListener('click', expandCollapseSideBar)
// .style.left("-250px");