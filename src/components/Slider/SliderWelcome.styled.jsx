import styled from "styled-components";

export const SliderContainer = styled.div`
  .slick-slide {
    display: flex;
    text-align: center;
    justify-content: center;

    img {
      max-width: 100%; /* Зображення адаптується до контейнера */
      height: auto; /* Зберігає пропорції */
      @media (min-width: 1440px) {
        width: 800px; /* Для десктопів зі шириною більше 1440px */
        height: auto;
      }
      @media (max-width: 1024px) {
        width: 600px; /* Для планшетів */
        height: auto;
      }
      @media (max-width: 768px) {
        width: 420px; /* Для мобільних пристроїв */
        height: auto;
      }
    }
  }
`;
