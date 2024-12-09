import { gsap } from "gsap";

export const animateCamera = (camera, position, target, duration = 1) => {
  gsap.to(camera.position, {
    position,
    duration,
    ease: "power2.inOut",
    onUpdate: () => camera.lookAt(...target),
  });
};

export const fadeInElement = (element, isVisible, duration = 1) => {
  gsap.to(element, {
    opacity: isVisible ? 1 : 0,
    duration,
    ease: "power2.inOut",
  });
};
