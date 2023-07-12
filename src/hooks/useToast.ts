import { useEffect, useState } from "react";
import t, { useToasterStore } from "react-hot-toast";

export const useToast = () => {
  const { toasts } = useToasterStore();

  const LIMIT_TOAST = 3;

  const [toastLimit, setToastLimit] = useState<number>(LIMIT_TOAST);

  useEffect(() => {
    toasts
      .filter((tt) => tt.visible)
      .filter((_, i) => i >= toastLimit)
      .forEach((tt) => t.dismiss(tt.id));
  }, [toasts]);

  const toast = {
    ...t,
    setLimit: (l: number) => {
      if (l !== toastLimit)
        setToastLimit(l);
    }
  };

  return { toast };
};