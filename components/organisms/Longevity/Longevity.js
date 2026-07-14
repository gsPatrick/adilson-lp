"use client";

import { useRef, useState } from "react";
import styles from "./Longevity.module.css";

export default function Longevity() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Left Column: Premium video component with volume controls */}
          <div className={styles.visualCol}>
            <div className={styles.collageFrame}>
              <video
                ref={videoRef}
                src="/videos/dr-adilson-longevidade.mp4"
                className={styles.collageVideo}
                autoPlay
                loop
                muted
                playsInline
              />
              <button
                onClick={toggleMute}
                className={styles.muteButton}
                aria-label={isMuted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
              >
                {isMuted ? <MuteIcon /> : <SoundIcon />}
              </button>
            </div>
          </div>

          {/* Right Column: Combined copy blocks into one continuous text block */}
          <div className={styles.textCol}>
            <p className={styles.description}>
              A verdade é que você vai envelhecer! E para ser uma pessoa
              independente à medida que envelhece, elimine o preconceito e
              comece o acompanhamento com o médico geriatra. Tenha você
              40, 50, 60 anos ou mais, o médico geriatra é o especialista
              que irá te acompanhar em todas as fases da vida a partir dos
              40 anos. Imagine chegar aos 80, 90 anos com independência, energia,
              sem depressão e ansiedade, tomando poucos ou nenhum
              medicamento e desfrutando da vida com mobilidade e saúde. O
              papel do médico geriatra é dar autonomia, qualidade de vida,
              bem-estar e acompanhar todo o processo do envelhecimento.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5544997013040&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <span className={styles.buttonContent}>
                Agendar Consulta
                <WhatsAppIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MuteIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
    </svg>
  );
}

function SoundIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 448 512" width="17" height="17" aria-hidden="true">
      <path
        fill="currentColor"
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
      />
    </svg>
  );
}
