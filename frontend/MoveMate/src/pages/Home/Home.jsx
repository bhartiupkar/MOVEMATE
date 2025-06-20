import React from 'react';
import HERO_IMAGE from '../../assets/HERO_IMAGE.png';
import AppLayout from '../../components/Layout/AppLayout';

const founder = true;
const review = true;

const Home = () => {
  return (
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati aut sapiente tempora soluta rem vitae earum id labore excepturi quasi, nobis non repudiandae voluptatem eos omnis. Tempore architecto accusamus consectetur temporibus reiciendis!
    </div>
  );
};

// Wrap Home with layout and pass props
export default AppLayout({ founder, review })(Home);
