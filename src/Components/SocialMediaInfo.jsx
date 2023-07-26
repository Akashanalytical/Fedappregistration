import { TextField, Grid } from "@mui/material";

const SocialMediaInfo = (props) => {
  const { formik } = props;
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
      <Grid item xs={12} sm={6}>
        <TextField
          name="instagaram"
          label="Instagram Link"
          required
          variant="outlined"
          size="large"
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
      <Grid item xs={12} sm={6}>
        <TextField
          name="facebook"
          label="Facebook Link"
          variant="outlined"
          type="phone"
          fullWidth
          size="large"
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
