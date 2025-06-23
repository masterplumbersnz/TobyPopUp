(function() {
  // Inject modal HTML
  var modalHTML = `
    <div id="myModal" class="toby-modal" style="display:none;">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Acknowledgement of Use</h2>
        <p>As an attendee of the 2025 NZ Plumbing Conference, you are invited to trial Toby, our AI-powered chatbot. Toby is currently in its testing phase, and we are actively working to improve the accuracy and reliability of the information it provides.</p>
        <p>Please note that, as Toby is still under development, the responses it generates may not always be accurate or up to date. We recommend that you do not rely on any information provided by Toby without first verifying its source.</p>
        <p>If you encounter any issues or would like to share your feedback, we welcome your input. Please use the link below to submit your comments and suggestions.</p>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Inject styles
  var style = document.createElement('style');
  style.innerHTML = `
    .toby-modal {
      position: fixed;
      z-index: 1000;
      left: 0; top: 0;
      width: 100%; height: 100%;
      background-color: rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      width: 90%;
      max-width: 600px;
      position: relative;
      font: inherit;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }

    .close {
      color: #aaa;
      position: absolute;
      top: 12px;
      right: 16px;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }

    .close:hover {
      color: #00395d;
    }

    @media (max-width: 480px) {
      .modal-content {
        font-size: 0.95rem;
        padding: 15px;
      }

      .close {
        font-size: 24px;
        top: 8px;
        right: 12px;
      }
    }
  `;
  document.head.appendChild(style);

  // Session-based show logic
  if (!sessionStorage.getItem('tobyModalShown')) {
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
    sessionStorage.setItem("tobyModalShown", "true");

    var span = modal.querySelector(".close");
    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
})();
