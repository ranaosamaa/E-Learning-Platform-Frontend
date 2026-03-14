document.addEventListener('DOMContentLoaded', () => {
    // 1. Toast Notification System
    const createToastContainer = () => {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.style.position = 'fixed';
            container.style.bottom = '20px';
            container.style.right = '20px';
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.gap = '10px';
            container.style.zIndex = '9999';
            document.body.appendChild(container);
        }
        return container;
    };

    window.showToast = (message, type = 'success') => {
        const container = createToastContainer();
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        // Basic styling for the toast
        toast.style.background = type === 'success' ? 'var(--success)' : 
                                 type === 'error' ? 'var(--danger)' : 'var(--primary)';
        toast.style.color = '#fff';
        toast.style.padding = '12px 20px';
        toast.style.borderRadius = 'var(--radius-md)';
        toast.style.boxShadow = 'var(--shadow-lg)';
        toast.style.fontWeight = '500';
        toast.style.fontSize = '0.875rem';
        toast.style.animation = 'fadeIn 0.3s ease-out forwards';
        toast.innerText = message;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s ease-out';
            setTimeout(() => {
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            }, 300);
        }, 3000);
    };

    // Replace default alerts with toasts on the window object
    window.alert = window.showToast;

    // 2. Auth Form Redirection
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const role = document.getElementById('roleSelect').value;
            showToast('Logging in...', 'success');
            setTimeout(() => {
                window.location.href = role === 'student' ? 'student-dashboard.html' : 'professor-dashboard.html';
            }, 800);
        });
    }

    // 3. Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const nav = document.getElementById('mainNav');
            nav.classList.toggle('active');
        });
    }

    // 4. Accordion Logic for Modules
    const moduleHeaders = document.querySelectorAll('.module-header');
    moduleHeaders.forEach(header => {
        // Only elements that are acting as accordions (not just title inputs)
        if (header.querySelector('.ph-caret-down')) {
            header.addEventListener('click', (e) => {
                // Ignore if clicked on input or buttons inside
                if(e.target.tagName === 'INPUT' || e.target.closest('button')) return;
                
                const content = header.nextElementSibling;
                const icon = header.querySelector('.ph-caret-down');
                if (content && content.classList.contains('module-content')) {
                    if (content.style.display === 'none') {
                        content.style.display = 'flex';
                        icon.style.transform = 'rotate(0deg)';
                    } else {
                        content.style.display = 'none';
                        icon.style.transform = 'rotate(180deg)';
                        icon.style.transition = 'transform 0.3s ease';
                    }
                }
            });
        }
    });

    // 5. Tabs Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Add simple toast to show tabs work
                showToast(`Switched to ${btn.innerText} tab`, 'info');
                
                // If there are corresponding tab contents, you would toggle them here based on index
            });
        });
    }

    // 6. Grading Student Selection Logic
    const submissionItems = document.querySelectorAll('.submission-item');
    if (submissionItems.length > 0) {
        const docName = document.querySelector('.document-viewer').previousElementSibling.querySelector('span');
        const docTitle = document.querySelector('.document-mock h2');
        const studentNameHeader = document.querySelector('.grading-sidebar-header h3');
        const studentInitials = document.querySelector('.grading-sidebar-header div');

        submissionItems.forEach(item => {
            item.addEventListener('click', () => {
                submissionItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                // Extract name
                const studentNameNode = item.querySelector('.student-name');
                const fullName = studentNameNode.innerText.trim();
                
                // Update UI visually
                if (docName) docName.innerText = `${fullName.replace(/\s+/g, '')}_Submission.pdf`;
                if (docTitle) docTitle.nextElementSibling.innerHTML = `<strong>Name:</strong> ${fullName}`;
                if (studentNameHeader) studentNameHeader.innerText = fullName;
                if (studentInitials) {
                    const parts = fullName.split(' ');
                    studentInitials.innerText = parts.length > 1 ? parts[0][0] + parts[1][0] : parts[0][0];
                }
            });
        });
    }

    // 7. Simple Search Form Interception
    const searchInputs = document.querySelectorAll('.search-bar input');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const term = e.target.value.trim();
                if(term) {
                    showToast(`Searching for "${term}"...`, 'info');
                }
            }
        });
    });

    // 8. File Upload Mock Logic
    const uploads = document.querySelectorAll('input[type="file"]');
    uploads.forEach(input => {
        input.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                showToast(`Successfully uploaded: ${e.target.files[0].name}`, 'success');
                
                // If it's inside an upload area, update text
                const parent = input.closest('.assignment-file-area') || input.closest('.upload-area');
                if (parent && parent.querySelector('h3, p')) {
                    const textEl = parent.querySelector('h3') || parent.querySelector('p');
                    textEl.innerText = `File ready: ${e.target.files[0].name}`;
                    textEl.style.color = 'var(--primary)';
                }
            }
        });
    });
});
