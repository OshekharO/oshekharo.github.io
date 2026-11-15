/**
 * OSHEKHARO — Vanilla JavaScript Interactions
 * Typewriter animation, email copy, toast notifications
 */

'use strict';

// ==========================================================================
// Typewriter Animation
// ==========================================================================

/**
 * Creates a typewriter effect on a target element
 * @param {HTMLElement} element - Target element for the animation
 * @param {string[]} phrases - Array of phrases to cycle through
 * @param {Object} options - Configuration options
 */
function createTypewriter(element, phrases, options = {}) {
  const config = {
    typingSpeed: options.typingSpeed || 60,
    deletingSpeed: options.deletingSpeed || 30,
    pauseDuration: options.pauseDuration || 2000,
    cursorBlinkRate: options.cursorBlinkRate || 530,
    ...options
  };

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;
  let animationFrameId = null;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Show first phrase statically
    element.textContent = phrases[0];
    return { destroy: () => {} };
  }

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isPaused) {
      return;
    }

    if (!isDeleting && charIndex <= currentPhrase.length) {
      // Typing forward
      element.textContent = currentPhrase.slice(0, charIndex);
      charIndex++;
    } else if (isDeleting && charIndex >= 0) {
      // Deleting backward
      element.textContent = currentPhrase.slice(0, charIndex);
      charIndex--;
    }

    // Determine next state
    if (!isDeleting && charIndex > currentPhrase.length) {
      // Finished typing, pause then start deleting
      isPaused = true;
      isDeleting = true;
      setTimeout(() => {
        isPaused = false;
      }, config.pauseDuration);
    } else if (isDeleting && charIndex < 0) {
      // Finished deleting, move to next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      charIndex = 0;
    }

    // Schedule next frame
    const delay = isDeleting ? config.deletingSpeed : config.typingSpeed;
    animationFrameId = setTimeout(type, delay);
  }

  // Start animation
  type();

  // Return cleanup function
  return {
    destroy() {
      if (animationFrameId) {
        clearTimeout(animationFrameId);
      }
    }
  };
}

// ==========================================================================
// Toast Notification
// ==========================================================================

let toastTimeoutId = null;

function showToast(message, duration = 2000) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  // Clear any existing timeout
  if (toastTimeoutId) {
    clearTimeout(toastTimeoutId);
  }

  // Set message and show
  toast.textContent = message;
  toast.setAttribute('aria-hidden', 'false');
  toast.classList.add('show');

  // Hide after duration
  toastTimeoutId = setTimeout(() => {
    hideToast();
  }, duration);
}

function hideToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.classList.remove('show');
  toast.setAttribute('aria-hidden', 'true');

  // Clear text after animation
  setTimeout(() => {
    toast.textContent = '';
  }, 300);
}

// ==========================================================================
// Email Copy Functionality
// ==========================================================================

async function copyEmail(event) {
  event.preventDefault();
  event.stopPropagation();

  const email = 'me@saksham.eu.org';

  try {
    await navigator.clipboard.writeText(email);
    showToast('Email copied!');
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = email;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('Email copied!');
    } catch (fallbackErr) {
      showToast('Failed to copy');
    }
    document.body.removeChild(textArea);
  }
}

// ==========================================================================
// Initialize on DOM Ready
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize typewriter
  const roleDynamic = document.querySelector('.role-dynamic');
  const roleStatic = document.querySelector('.role-static');

  if (roleDynamic) {
    const phrases = [
      'Developer',
      'Creator',
      'Tech Enthusiast',
      'Always learning something new'
    ];

    // Hide static fallback when JS works
    if (roleStatic) {
      roleStatic.style.display = 'none';
    }

    createTypewriter(roleDynamic, phrases, {
      typingSpeed: 60,
      deletingSpeed: 30,
      pauseDuration: 2000
    });
  }

  // Initialize email copy
  const emailLink = document.querySelector('.email-link');
  if (emailLink) {
    emailLink.addEventListener('click', copyEmail);
  }

  // Add subtle entrance animation to social links
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach((link, index) => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(10px)';
    link.style.transition = 'opacity 400ms ease-out, transform 400ms ease-out';
    link.style.transitionDelay = `${100 + index * 80}ms`;

    // Trigger reflow then animate in
    requestAnimationFrame(() => {
      link.style.opacity = '1';
      link.style.transform = 'translateY(0)';
    });
  });
});

// ==========================================================================
// Handle Visibility Change (Pause animation when tab hidden)
// ==========================================================================

document.addEventListener('visibilitychange', () => {
  // Typewriter handles its own state via isPaused flag
  // Could extend createTypewriter to expose pause/resume if needed
});

// ==========================================================================
// Keyboard Navigation Enhancement
// ==========================================================================

// Ensure social links are keyboard accessible
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    const target = event.target;
    if (target.classList.contains('email-link')) {
      event.preventDefault();
      copyEmail(event);
    }
  }
});