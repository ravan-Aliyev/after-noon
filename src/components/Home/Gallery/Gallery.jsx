import Container from "../../UI/Container";
import classes from "./Gallery.module.scss";

const galleryImgs = [
  {
    imgUrl:
      "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/01.jpg",
  },
  {
    imgUrl:
      "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/02.jpg",
  },
  {
    imgUrl:
      "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/04.jpg",
  },
  {
    imgUrl:
      "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/07.jpg",
  },
  {
    imgUrl:
      "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/05.jpg",
  },
  {
    imgUrl:
      "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/03.jpg",
  },
  {
    imgUrl:
      "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/06.jpg",
  },
  {
    imgUrl:
      "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/08.jpg",
  },
  {
    imgUrl:
      "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/09.jpg",
  },
  {
    imgUrl:
      "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/12.jpg",
  },
  {
    imgUrl:
      "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/11.jpg",
  },
  {
    imgUrl:
      "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/10.jpg",
  },
];

function Gallery() {
  return (
    <section className={classes.section}>
      <h2 className="heading-h2">#AfternoonAtHome</h2>
      <Container className={classes.container}>
        {galleryImgs.map((item, i) => {
          return (
            <figure className={classes[`galleryItem--${i + 1}`]} key={i}>
              <img src={item.imgUrl} alt="" />
            </figure>
          );
        })}
      </Container>
    </section>
  );
}

export default Gallery;
