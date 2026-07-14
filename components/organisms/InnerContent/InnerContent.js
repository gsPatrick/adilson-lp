import Image from "next/image";
import styles from "./InnerContent.module.css";

export default function InnerContent({
  eyebrow,
  title,
  paragraphs = [],
  listTitle,
  listItems = [],
  imageSrc,
  imageAlt = "Imagem explicativa",
  imagePosition = "right", // "left" or "right"
}) {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${imagePosition === "left" ? styles.reverse : ""}`}>
        
        {/* Text Column */}
        <div className={styles.textCol}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          {title && <h2 className={styles.title}>{title}</h2>}
          
          <div className={styles.paragraphs}>
            {paragraphs.map((p, idx) => (
              <p key={idx} className={styles.paragraph}>{p}</p>
            ))}
          </div>

          {listItems.length > 0 && (
            <div className={styles.listContainer}>
              {listTitle && <h3 className={styles.listTitle}>{listTitle}</h3>}
              <ul className={styles.list}>
                {listItems.map((item, idx) => (
                  <li key={idx} className={styles.listItem}>
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.checkIcon}
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Image Column */}
        {imageSrc && (
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={500}
                height={600}
                className={styles.image}
                priority
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
