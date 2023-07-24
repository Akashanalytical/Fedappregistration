import { TextField, Grid } from "@mui/material";

const PersonalInfo = (props) => {
  const { formik } = props;
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <TextField
          name="whatsapp"
          label="Whatsapp Number"
          variant="standard"
          required
          size="small"
          type="phone"
          fullWidth
          value={formik.values.whatsapp}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.whatsapp && formik.errors.whatsapp)}
          helperText={
            Boolean(formik.touched.whatsapp && formik.errors.whatsapp)
              ? formik.errors.whatsapp
              : ""
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="instagaram"
          label="Instagram Link"
          required
          variant="standard"
          size="small"
          fullWidth
          value={formik.values.instagaram}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.instagaram && formik.errors.instagaram)}
          helperText={
            Boolean(formik.touched.instagaram && formik.errors.instagaram)
              ? formik.errors.instagaram
              : ""
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="facebook"
          label="Facebook Link"
          variant="standard"
          type="phone"
          fullWidth
          size="small"
          value={formik.values.facebook}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.facebook && formik.errors.facebook)}
          helperText={
            Boolean(formik.touched.facebook && formik.errors.facebook)
              ? formik.errors.facebook
              : ""
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="twitter"
          label="Twitter Link"
          variant="standard"
          size="small"
          fullWidth
          value={formik.values.twitter}
          onChange={formik.handleChange}
          error={formik.touched.twitter && Boolean(formik.errors.twitter)}
          helperText={formik.touched.twitter && formik.errors.twitter}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="linkedin"
          label="Linkedin Link"
          variant="standard"
          type="file"
          size="small"
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

export default PersonalInfo;
