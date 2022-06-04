import { keyframes } from "styled-components";

export const WaveAnimate=keyframes`
0%,80% {
    transform: rotateY(360deg)
  }
`

export const NavFadeIn =keyframes`
0%{
  opacity: 0;

}
100%{
  opacity: 1;
  
}
`
export const NavSlideIn=keyframes`
0%{
  transform: translateX(-100%);
  opacity:0;
}
75%{
  transform: translateX(10px);
}
100%{
  transform: translateX(0);
  opacity:1;
}
`