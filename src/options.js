// Saves options to chrome.storage.
function save_options() {
  const style = document.getElementById('style').value;
  const autoHide = document.getElementById('autoHide').checked;
  chrome.storage.local.set({
    style,
    autoHide,
  }, () => {
    // Update status to let user know options were saved.
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(() => {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.local.get({
    style: 'native',
    autoHide: true,
  }, items => {
    document.getElementById('style').value = items.style;
    document.getElementById('autoHide').checked = items.autoHide;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
