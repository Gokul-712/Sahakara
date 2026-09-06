(function () {
  const panels = document.querySelectorAll('.form-panel');
  const steps = document.querySelectorAll('.step-item');
  const nextBtn = document.getElementById('nextBtn');
  const backBtn = document.getElementById('backBtn');
  const form = document.getElementById('registerForm');
  const successScreen = document.getElementById('successScreen');
  const formHead = document.getElementById('formHead');

  let current = 1;
  const total = panels.length;

  function showStep(n) {
    panels.forEach(p => p.classList.toggle('is-active', Number(p.dataset.panel) === n));
    steps.forEach(s => {
      const stepNum = Number(s.dataset.step);
      s.classList.toggle('is-active', stepNum === n);
      s.classList.toggle('is-done', stepNum < n);
    });
    backBtn.style.visibility = n === 1 ? 'hidden' : 'visible';
    nextBtn.textContent = n === total ? 'Register Securely' : 'Continue';
    if (n === total) populateReview();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function validateStep(n) {
    const panel = document.querySelector(`.form-panel[data-panel="${n}"]`);
    const required = panel.querySelectorAll('[required]');
    for (const field of required) {
      if (field.id === 'consentCheck') continue;
      if (!field.value) {
        field.focus();
        field.style.borderColor = 'var(--red-500)';
        return false;
      }
      field.style.borderColor = '';
    }

    if (n === total) {
      const consent = document.getElementById('consentCheck');
      const warning = document.getElementById('consentWarning');
      const container = document.getElementById('consentContainer');

      if (!consent.checked) {
        if (warning) warning.style.display = 'block';
        if (container) {
          container.classList.add('consent-error-highlight');
          container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        consent.focus();
        
        consent.addEventListener('change', () => {
          if (consent.checked) {
            if (warning) warning.style.display = 'none';
            if (container) container.classList.remove('consent-error-highlight');
          }
        }, { once: true });

        return false;
      }
    }
    return true;
  }

  function populateReview() {
    const val = id => document.getElementById(id)?.value || '—';
    document.getElementById('rvName').textContent = val('fullName');
    document.getElementById('rvDob').textContent = val('dob');
    document.getElementById('rvPhone').textContent = val('phone');
    document.getElementById('rvId').textContent = document.getElementById('idUpload').files.length
      ? document.getElementById('idUpload').files[0].name : 'Not uploaded';
    document.getElementById('rvYears').textContent = val('yearsExp');
    document.getElementById('rvCoop').textContent = val('currentCoop') || 'Not selected';
    const cat = document.querySelector('input[name="primaryCat"]:checked');
    document.getElementById('rvCategory').textContent = cat ? cat.value : 'Not selected';
    document.getElementById('rvLevel').textContent = val('skillLevel');
  }

  nextBtn.addEventListener('click', () => {
    if (!validateStep(current)) return;
    if (current === total) {
      form.style.display = 'none';
      document.querySelector('.stepper').style.display = 'none';
      formHead.style.display = 'none';
      successScreen.style.display = 'block';
      return;
    }
    current++;
    showStep(current);
  });

  backBtn.addEventListener('click', () => {
    if (current === 1) return;
    current--;
    showStep(current);
  });

  // upload boxes: show filename, toggle visual state
  function wireUpload(inputId, boxId, textId) {
    const input = document.getElementById(inputId);
    const box = document.getElementById(boxId);
    const text = document.getElementById(textId);
    if (!input) return;
    input.addEventListener('change', () => {
      if (input.files.length) {
        text.textContent = input.files[0].name;
        box.classList.add('has-file');
      }
    });
  }
  wireUpload('idUpload', 'uploadBoxId', 'uploadIdText');
  wireUpload('expUpload', 'uploadBoxExp', 'uploadExpText');
  wireUpload('skillUpload', 'uploadBoxSkill', 'uploadSkillText');

  // chip select styling
  document.querySelectorAll('.chip-option input').forEach(input => {
    input.addEventListener('change', () => {
      document.querySelectorAll('.chip-option').forEach(c => c.classList.remove('is-checked'));
      input.closest('.chip-option').classList.add('is-checked');
    });
  });

  showStep(current);
})();
