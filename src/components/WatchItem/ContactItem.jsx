import { useDispatch, useSelector } from "react-redux";
import {
  delContact,
  clearCurrentContact,
  changeCurrentContact,
} from "../../store/slices/contactSlice";

import { Paper, Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ContactItem = ({ contact }) => {
  const { id, firstName, lastName } = contact;

  const dispatch = useDispatch();

  const currentContact = useSelector(
    (state) => state.contactList.currentContact,
  );

  const isSelected = currentContact?.id === id;

  const onContactDelete = (e) => {
    e.stopPropagation();
    dispatch(delContact(id));
    dispatch(clearCurrentContact());
  };

  const onContactEdit = () => {
    dispatch(changeCurrentContact(id));
  };

  return (
    <Paper
      elevation={isSelected ? 6 : 2}
      onDoubleClick={onContactEdit}
      sx={{
        width: 400,
        mb: 1.5,
        p: 1.5,
        cursor: "pointer",
        backgroundColor: isSelected ? "primary.dark" : "background.paper",
        color: isSelected ? "primary.contrastText" : "text.primary",
        transition: "all 0.2s ease",
        "&:hover": {
          elevation: 4,
          backgroundColor: isSelected ? "primary.dark" : "action.hover",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, overflow: "hidden" }}>
          <Typography variant="body1" noWrap fontWeight={500}>
            {firstName}
          </Typography>
          <Typography variant="body1" noWrap>
            {lastName}
          </Typography>
        </Box>

        <IconButton
          size="small"
          onClick={onContactDelete}
          sx={{
            color: isSelected ? "primary.contrastText" : "error.main",
            "&:hover": {
              backgroundColor: isSelected
                ? "rgba(255,255,255,0.15)"
                : "error.light",
            },
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ContactItem;
