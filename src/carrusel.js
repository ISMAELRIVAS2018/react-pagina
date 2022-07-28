import React from 'react';
import ReactDOM, { render } from 'react-dom';



import InfiniteCarousel from 'react-leaf-carousel';

import Calzado from './img/calzado.png'
import Balon from './img/balones.png'
import Ropa  from './img/ropa.png'
import Guantes from './img/guantes.png'
import Mochila from './img/mochila.png'





function Carrusel() {
    return (
        <>
             <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=""
        src={Calzado}
      />
    </div>
    <div>
      <img
        alt=""
        src={Balon}
      />
    </div>
    <div>
      <img
        alt=""
        src={Guantes}
      />
    </div>
    <div>
      <img
        alt=""
        src={Mochila}
      />
    </div>
    <div>
      <img
        alt=""
        src={Ropa}
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=ee1f34&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=91b4c0&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=ff6347&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=ebbfbf&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=def1f9&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=cdf2c6&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=9fa616&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=2c4caa&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=44e3e1&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=ff6666&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=94e1e3&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=29083c&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=ffff99&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=616161&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://placeholdit.imgix.net/~text?txtsize=20&bg=ed7ebe&txtclr=ffffff&txt=215%C3%97215&w=215&h=215"
      />
    </div>
  </InfiniteCarousel>
        </>
    )
}


export default Carrusel;