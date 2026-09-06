document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('toast');
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
  }

  // Dashboard: job category filter chips
  const filterBar = document.querySelector('.filter-bar');
  const jobList = document.getElementById('jobList');
  if (filterBar && jobList) {
    filterBar.querySelectorAll('.chip[data-filter]').forEach(chip => {
      chip.addEventListener('click', () => {
        filterBar.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const f = chip.dataset.filter;
        jobList.querySelectorAll('.job-item').forEach(item => {
          const types = item.dataset.type || '';
          item.style.display = (f === 'all' || types.includes(f)) ? 'flex' : 'none';
        });
      });
    });
  }

  // Dashboard: accept job buttons
  document.querySelectorAll('.accept-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.job-item');
      const title = item.querySelector('.title').firstChild.textContent.trim();
      showToast(`Accepted: ${title}`);
      item.style.opacity = '0.5';
      btn.textContent = 'Accepted';
      btn.disabled = true;
    });
  });

  // History page: status filter chips
  const historyTable = document.getElementById('historyTable');
  if (historyTable) {
    const chips = document.querySelectorAll('.filter-bar .chip[data-filter]');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const f = chip.dataset.filter;
        historyTable.querySelectorAll('tbody tr').forEach(row => {
          row.style.display = (f === 'all' || row.dataset.status === f) ? '' : 'none';
        });
      });
    });

    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const q = searchInput.value.toLowerCase();
        historyTable.querySelectorAll('tbody tr').forEach(row => {
          row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
        });
      });
    }
  }

  // Welfare fund request button
  document.querySelectorAll('.card .btn-block').forEach(btn => {
    if (btn.textContent.trim() === 'Request support') {
      btn.addEventListener('click', () => showToast('Support request sent to your federation for review'));
    }
  });

  // Skill enrol buttons
  document.querySelectorAll('.train-item .btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Enrolled — check your dashboard for the schedule');
      btn.textContent = 'Enrolled';
      btn.disabled = true;
    });
  });
});
