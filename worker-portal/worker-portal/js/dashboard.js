(function () {
  // ---- sidebar view switching (if in-page panels exist) ----
  const navItems = document.querySelectorAll('.nav-item[data-view]');
  const viewPanels = document.querySelectorAll('.view-panel');

  navItems.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = btn.dataset.view;
      const targetPanel = document.getElementById(`view-${target}`);
      if (targetPanel) {
        // If panel exists on page, toggle view panel
        navItems.forEach(b => b.classList.toggle('is-active', b === btn));
        viewPanels.forEach(p => p.classList.toggle('is-active', p.id === `view-${target}`));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // ---- accept job flow -> redirect to job-details.html ----
  document.querySelectorAll('.job-accept').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const row = btn.closest('.job-row');
      const title = row.querySelector('.title').textContent.trim();
      const meta = row.querySelector('.meta').textContent.trim();
      const price = row.querySelector('.amount').textContent.trim();

      const clientName = row.dataset.clientName || 'Rajesh Ramachandran';
      const clientAge = row.dataset.clientAge || '44 yrs';
      const clientPhone = row.dataset.clientPhone || '+91 98422 10482';
      const clientAddress = row.dataset.clientAddress || '42, 2nd Cross, Ganapathy, Coimbatore';
      const clientNotes = row.dataset.clientNotes || 'Sparks observed in switchboard. Call before reaching.';

      const jobData = {
        title,
        meta,
        price,
        clientName,
        clientAge,
        clientPhone,
        clientAddress,
        clientNotes
      };

      localStorage.setItem('sahakari_accepted_job', JSON.stringify(jobData));
      window.location.href = 'job-details.html';
    });
  });

  // ---- logout confirmation modal ----
  const logoutBtn = document.getElementById('logoutBtn');
  const logoutModal = document.getElementById('logoutModal');
  const cancelLogoutBtn = document.getElementById('cancelLogoutBtn');
  const confirmLogout = document.getElementById('confirmLogout');

  if (logoutBtn && logoutModal) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      logoutModal.classList.add('is-open');
    });

    if (cancelLogoutBtn) {
      cancelLogoutBtn.addEventListener('click', () => logoutModal.classList.remove('is-open'));
    }

    if (logoutModal) {
      logoutModal.addEventListener('click', e => {
        if (e.target === logoutModal) logoutModal.classList.remove('is-open');
      });
    }

    if (confirmLogout) {
      confirmLogout.addEventListener('click', () => {
        window.location.href = '../index.html';
      });
    }
  }

  // ---- peer training modal ----
  const trainingModal = document.getElementById('applyTrainingModal');
  const openTrainingBtn = document.getElementById('openApplyTrainingModal');
  const closeTrainingBtn = document.getElementById('closeTrainingModal');
  const submitTrainingRequest = document.getElementById('submitTrainingRequest');

  if (openTrainingBtn && trainingModal) {
    openTrainingBtn.addEventListener('click', () => trainingModal.classList.add('is-open'));
    if (closeTrainingBtn) closeTrainingBtn.addEventListener('click', () => trainingModal.classList.remove('is-open'));
    trainingModal.addEventListener('click', e => { if (e.target === trainingModal) trainingModal.classList.remove('is-open'); });

    if (submitTrainingRequest) {
      submitTrainingRequest.addEventListener('click', () => {
        const topic = document.getElementById('trainingTopic').value.trim() || 'Solar wiring & panel setup';
        const fee = document.getElementById('trainingFee').value.trim() || '350';
        trainingModal.classList.remove('is-open');
        openTrainingBtn.textContent = `✓ Request Posted: ${topic} (₹${fee})`;
        openTrainingBtn.style.background = 'var(--teal-600)';
      });
    }
  }

  // ---- peer training accept buttons ----
  document.querySelectorAll('.peer-train-accept').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = 'Accepted & Training';
      btn.style.background = 'var(--teal-600)';
      btn.style.color = '#ffffff';
      btn.disabled = true;
    });
  });

  // ---- history filter tabs ----
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      const filter = tab.dataset.filter || 'all';
      const rows = document.querySelectorAll('.history-table tbody tr');

      rows.forEach(row => {
        const status = row.dataset.status || 'paid';
        if (filter === 'all') {
          row.style.display = '';
        } else if (filter === 'paid') {
          row.style.display = (status === 'paid') ? '' : 'none';
        } else if (filter === 'processing') {
          row.style.display = (status === 'processing') ? '' : 'none';
        } else if (filter === 'month') {
          row.style.display = '';
        }
      });
    });
  });

  // ---- worker profile stats modal ----
  const profileStatsModal = document.getElementById('profileStatsModal');
  const closeProfileStatsModal = document.getElementById('closeProfileStatsModal');
  const sidebarFoot = document.querySelector('.sidebar-foot');

  if (sidebarFoot && profileStatsModal) {
    sidebarFoot.addEventListener('click', (e) => {
      if (e.target.closest('.logout-btn')) return;
      profileStatsModal.classList.add('is-open');
    });

    if (closeProfileStatsModal) {
      closeProfileStatsModal.addEventListener('click', () => profileStatsModal.classList.remove('is-open'));
    }

    profileStatsModal.addEventListener('click', (e) => {
      if (e.target === profileStatsModal) profileStatsModal.classList.remove('is-open');
    });
  }
})();
