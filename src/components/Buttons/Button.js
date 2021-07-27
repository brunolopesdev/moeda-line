import { MeuBotao } from '../../components/StyledComponents';

export const CustomButton = ({ children }) => {
   return (
      <MeuBotao>
         {children}
      </MeuBotao>
   );
};
