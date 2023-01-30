import { ISkeleton } from "@/types/skeleton";
import styled from "styled-components";

/* Skeleton */
export const Skeleton_Container = styled.div<ISkeleton>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  border-radius: ${(props)=> props.borderRadius};

  background-image: linear-gradient(
    135deg,
    #0F93BA 0%,
    #0FB2BA 50%,
    #0F93BA 100%
  );

  background-size: 400% 400%;

  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -50% 0%;
    }
  }
`;
/* Skeleton */
