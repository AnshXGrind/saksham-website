'use strict';

const toggle = (element) => element?.classList.toggle('active');

const sidebar = document.querySelector('[data-sidebar]');
document.querySelector('[data-sidebar-btn]')?.addEventListener('click', () => toggle(sidebar));

const select = document.querySelector('[data-select]');
const selectValue = document.querySelector('[data-selecct-value]');
const selectItems = document.querySelectorAll('[data-select-item]');
const filterButtons = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterProjects = (value) => {
  const selected = value.toLowerCase().replace(/\s+/g, '-');
  filterItems.forEach((item) => {
    const categories = item.dataset.category.split(' ');
    item.classList.toggle('active', selected === 'all' || categories.includes(selected));
  });
};

select?.addEventListener('click', () => toggle(select));
selectItems.forEach((item) => item.addEventListener('click', () => {
  selectValue.textContent = item.textContent;
  select.classList.remove('active');
  filterProjects(item.textContent);
}));

filterButtons.forEach((button) => button.addEventListener('click', () => {
  filterButtons.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  selectValue.textContent = button.textContent;
  filterProjects(button.textContent);
}));

const projectModal = document.querySelector('[data-project-modal]');
const projectOverlay = document.querySelector('[data-project-overlay]');
const projectClose = document.querySelector('[data-project-close]');
const projectTitle = document.querySelector('[data-project-modal-title]');
const projectCategory = document.querySelector('[data-project-modal-category]');
const projectDescription = document.querySelector('[data-project-modal-description]');
const projectLink = document.querySelector('[data-project-modal-link]');

const closeProjectModal = () => projectModal?.classList.remove('active');
const openProjectModal = (project) => {
  projectTitle.textContent = project.dataset.projectTitle;
  projectCategory.textContent = project.dataset.projectCategory;
  projectDescription.textContent = project.dataset.projectDescription;
  projectLink.href = project.dataset.projectLink;
  projectModal.classList.add('active');
};

document.querySelectorAll('[data-project-item]').forEach((project) => project.addEventListener('click', (event) => {
  event.preventDefault();
  openProjectModal(project);
}));
projectClose?.addEventListener('click', closeProjectModal);
projectOverlay?.addEventListener('click', closeProjectModal);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeProjectModal(); });

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');
navigationLinks.forEach((link) => link.addEventListener('click', () => {
  const target = link.textContent.trim().toLowerCase();
  pages.forEach((page) => page.classList.toggle('active', page.dataset.page === target));
  navigationLinks.forEach((item) => item.classList.toggle('active', item === link));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  sidebar?.classList.remove('active');
}));
