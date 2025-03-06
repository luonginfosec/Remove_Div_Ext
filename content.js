function removeUsernameDiv() {
    const element = document.querySelector('.username.container-fluid');
    if (element) {
      element.remove();
      console.log('Đã xóa div username container-fluid');
      return true;
    } else {
      console.log('Không tìm thấy div username container-fluid');
      return false;
    }
  }
  
  removeUsernameDiv();
  
  const observer = new MutationObserver(function(mutations) {
    if (removeUsernameDiv()) {
      observer.disconnect(); 
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  setTimeout(removeUsernameDiv, 2000);