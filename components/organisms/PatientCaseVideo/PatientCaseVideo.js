"use client";

import { useRef, useState } from "react";
import styles from "./PatientCaseVideo.module.css";

export default function PatientCaseVideo() {
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
        
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Experiência Clínica</p>
          <h2 className={styles.title}>Caso Clínico e Sucesso no Acompanhamento</h2>
          <p className={styles.lead}>
            Assista ao relato do Dr. Adilson Silvestre detalhando a evolução e a reabilitação funcional de um de seus pacientes.
          </p>
        </div>

        {/* Cinematic Video Card */}
        <div className={styles.videoWrapper}>
          <div className={styles.videoCard}>
            <video
              ref={videoRef}
              src="/videos/dr-adilson-caso-clinico.mp4"
              className={styles.videoElement}
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Control Toggle Overlay */}
            <button
              onClick={toggleMute}
              className={styles.muteButton}
              aria-label={isMuted ? "Ativar som do relato" : "Desativar som do relato"}
            >
              {isMuted ? <MuteIcon /> : <SoundIcon />}
              <span className={styles.btnLabel}>
                {isMuted ? "Ativar Som" : "Mudar para Mudo"}
              </span>
            </button>
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
