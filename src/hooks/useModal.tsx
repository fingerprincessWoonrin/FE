import { ReactNode } from "react";
import { IsModal } from "../atoms";
import { useSetRecoilState } from "recoil";

const useModal = () => {
  const setIsModal = useSetRecoilState(IsModal);
  const openModal = (node: ReactNode) => setIsModal(node);
  const closeModal = () => setIsModal(null);
  return { openModal, closeModal };
};

export default useModal;
