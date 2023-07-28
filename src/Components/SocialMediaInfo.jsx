import { TextField, Grid } from "@mui/material";
import { useEffect, useState } from "react";

const SocialMediaInfo = (props) => {
  const { formik } = props;

  const [usertoched, setusertouched] = useState({
    whatsapp: false,
    instagaram: false,
    facebook: false,
  });
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <TextField
          name="whatsapp"
          label="Whatsapp Number"
          variant="outlined"
          required
          size="large"
          type="phone"
          inputProps={{ maxLength: 10 }}
          fullWidth
          value={formik.values.whatsapp}
          onChange={formik.handleChange}
          onBlur={() => {
            let updated = { whatsapp: true };
            setusertouched((usertoched) => ({
              ...usertoched,
              ...updated,
            }));
          }}
          error={Boolean(usertoched.whatsapp && formik.errors.whatsapp)}
          helperText={
            Boolean(usertoched.whatsapp && formik.errors.whatsapp)
              ? formik.errors.whatsapp
              : ""
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="instagaram"
          label="Instagram Link"
          required
          variant="outlined"
          size="large"
          fullWidth
          value={formik.values.instagaram}
          onBlur={() => {
            let updated = { instagaram: true };
            setusertouched((usertoched) => ({
              ...usertoched,
              ...updated,
            }));
          }}
          onChange={formik.handleChange}
          error={Boolean(usertoched.instagaram && formik.errors.instagaram)}
          helperText={
            Boolean(usertoched.instagaram && formik.errors.instagaram)
              ? formik.errors.instagaram
              : ""
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="facebook"
          label="Facebook Link"
          variant="outlined"
          type="phone"
          fullWidth
          required
          size="large"
          value={formik.values.facebook}
          onChange={formik.handleChange}
          error={Boolean(usertoched.facebook && formik.errors.facebook)}
          onBlur={() => {
            let updated = { facebook: false };
            setusertouched((usertoched) => ({
              ...usertoched,
              ...updated,
            }));
          }}
          helperText={
            Boolean(usertoched.facebook && formik.errors.facebook)
              ? formik.errors.facebook
              : ""
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="twitter"
          label="Twitter Link"
          variant="outlined"
          size="large"
          fullWidth
          value={formik.values.twitter}
          onChange={formik.handleChange}
          error={formik.touched.twitter && Boolean(formik.errors.twitter)}
          helperText={formik.touched.twitter && formik.errors.twitter}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="linkedin"
          label="Linkedin Link"
          variant="outlined"
          size="large"
          fullWidth
          // value={formik.values.linkedin}
          // onChange={formik.handleChange}
          error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
          helperText={formik.touched.linkedin && formik.errors.linkedin}
        />
      </Grid>
    </Grid>
  );
};

export default SocialMediaInfo;
