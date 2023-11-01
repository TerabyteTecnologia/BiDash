import { useEffect } from 'react';
import io from 'socket.io-client';
import { useToast } from '../../hooks/useToast';

export const NotificationManager = () => {
  const { toast } = useToast();
  useEffect(() => {
    const socket = io('http://localhost:3020'); // Substitua pela URL do seu servidor

    socket.on('emailsEnviados', (mensagem) => {
      console.log('Mensagem recebida:', mensagem);
         toast.success(mensagem)
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Conteúdo do componente</div>;
};

