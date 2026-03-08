"use client";

export default function WhatsAppButton() {
  const phoneNumber = "8801785666746"; // Bangladesh country code + number
  const url = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-decoration: none;
          animation: whatsappPulse 2s ease-in-out infinite;
        }
        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 28px rgba(37, 211, 102, 0.55);
          animation: none;
        }
        .whatsapp-float svg {
          width: 32px;
          height: 32px;
          fill: white;
        }
        @keyframes whatsappPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 4px 30px rgba(37, 211, 102, 0.65); }
        }
        @media (max-width: 640px) {
          .whatsapp-float {
            width: 52px;
            height: 52px;
            bottom: 20px;
            right: 20px;
          }
          .whatsapp-float svg {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 0C7.165 0 .002 7.163.002 16c0 2.822.737 5.577 2.137 8.003L.014 32l8.204-2.098A15.95 15.95 0 0 0 16.004 32C24.837 32 32 24.837 32 16S24.837 0 16.004 0zm0 29.09a13.06 13.06 0 0 1-6.662-1.82l-.478-.284-4.956 1.27 1.3-4.77-.312-.496A13.04 13.04 0 0 1 2.91 16c0-7.22 5.876-13.09 13.094-13.09 7.22 0 13.086 5.87 13.086 13.09 0 7.22-5.866 13.09-13.086 13.09zm7.18-9.805c-.393-.197-2.326-1.148-2.687-1.279-.36-.131-.623-.197-.886.197-.263.394-1.018 1.279-1.248 1.542-.23.263-.46.296-.853.098-.394-.197-1.662-.613-3.167-1.953-1.17-1.044-1.96-2.333-2.19-2.727-.23-.394-.025-.607.173-.803.178-.176.394-.46.591-.69.197-.23.263-.394.394-.656.131-.263.066-.493-.033-.69-.098-.197-.886-2.136-1.214-2.924-.32-.768-.645-.664-.886-.676l-.755-.013c-.263 0-.69.098-1.05.493-.361.394-1.378 1.346-1.378 3.282s1.411 3.807 1.608 4.07c.197.263 2.776 4.238 6.727 5.944.94.406 1.674.649 2.246.83.944.3 1.803.258 2.483.157.757-.113 2.326-.951 2.654-1.87.329-.918.329-1.706.23-1.87-.098-.164-.36-.263-.754-.46z" />
        </svg>
      </a>
    </>
  );
}
