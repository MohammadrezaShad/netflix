import Card from "./card";
import Link from "next/link";
import clsx from "classnames";
import styles from "./section-cards.module.css";

type SectionCardsProps = {
  title: string;
  shouldWrap?: boolean;
  shouldScale?: boolean;
  size: Size;
  videos?: Video[];
};

const SectionCards: React.FC<SectionCardsProps> = (props) => {
  const { title, videos = [], size, shouldWrap = false, shouldScale } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={clsx(styles.cardWrapper, shouldWrap && styles.wrap)}>
        {videos.map((video, idx) => {
          return (
            <Link key={video.id} href={`/video/${video.id}`}>
              <a>
                <Card
                  id={idx}
                  imgUrl={video.imgUrl}
                  size={size}
                  shouldScale={shouldScale}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SectionCards;
