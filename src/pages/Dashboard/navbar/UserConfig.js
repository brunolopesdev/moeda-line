import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useFormik } from 'formik';
import { FieldContainer, MeuBotao } from '@/components/StyledComponents';
import AuthContext from '@/Context/AuthContext';
import api from '@/services/api';

export default function UserConfig() {

  const { userId } = useContext(AuthContext)
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (values) => {
    const { ...data } = values

    const response = await api.put(`users/update`, data)
      .catch((err) => {
        if (err && err.response) {
          

        }
      })
    if (response && response.data) {
      
      formik.resetForm()
    }

  }

  const formik = useFormik({
    initialValues: { name: "", email: "", id: userId },
    validateOnBlur: true,
    onSubmit,
    // validationSchema: validationSchema,
  })

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      <i className="fa fa-cog" style={{padding: "5px"}}></i>Configurações
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Dados do usuário</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Alterar informações de usuário:
          </DialogContentText>
          <form onSubmit={formik.handleSubmit}>

          <FieldContainer>
              
              <input
                type="text"
                placeholder={userId}
                name="id"
                hidden
                value={formik.values.id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FieldContainer>
            
            <FieldContainer>
              <label>Novo Nome</label>
              <input
                type="text"
                placeholder="Nome"
                name="name"
                required
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FieldContainer>

            <FieldContainer>
              <label>Novo Email</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FieldContainer>

            <MeuBotao type="submit">Enviar</MeuBotao>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
