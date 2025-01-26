function showContent(contentId) {
    // Hide all content divs
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.add('hidden'));

    // Remove active state from all buttons
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the clicked tab's content and make the button active
    document.getElementById(contentId).classList.remove('hidden');
    document.querySelector(`.tab.${contentId.split('-')[0]}`).classList.add('active');
}
