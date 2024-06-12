import { toast } from 'react-hot-toast';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Captcha from 'ui-component/Capcha';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactApi } from 'utils/contact';
import traXemAgri from 'assets/contact/TraXemAgri.svg';
import aceCRM from 'assets/contact/AceCRM.svg';
import eMedia from 'assets/contact/EMedia.svg';
import emPL from 'assets/contact/EmPL.svg';
import emTeller from 'assets/contact/EmTeller.svg';
import instanceView from 'assets/contact/InstanceView.svg';
import smeAccel from 'assets/contact/SmeAccel.svg';
import traXemMarket from 'assets/contact/TraXemMarket.svg';
import traXemSCM from 'assets/contact/TraXemSCM.svg';
import { FormattedMessage } from 'react-intl';

const defaultValues = {
    name: '',
    phoneNum: '',
    email: '',
    message: '',
    captvalue: ''
};
const schema = z.object({
    name: z.string().min(4, 'min_length').max(100, 'max_length'),
    phoneNum: z.string().regex(/(84|0)(3|5|7|8|9)+([0-9]{8})\b/, 'phone'),
    email: z.string().email(),
    message: z.string().min(5, 'min_length').max(500, 'max_length'),
    captvalue: z.string().min(1, 'min_length')
});
const ContactUs = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues,
        mode: 'all',
        resolver: zodResolver(schema)
    });
    const captchaRef = useRef({ refresh: () => {} });
    const onSubmit = async (values: z.infer<typeof schema>) => {
        try {
            await contactApi.sendContact(values);
            reset();
            captchaRef.current.refresh?.();
            toast.success(<FormattedMessage id="contact_success" />);
        } catch (error) {
            toast.error(<FormattedMessage id="contact_failed" />);
        }
    };
    return (
        <>
            <section id="contact" style={{ padding: '0', margin: '0 30px' }}>
                <Stack
                    sx={{
                        background: 'linear-gradient(180deg, #E6F7EE 100%, #E6F7EE 100%)',
                        flexDirection: {
                            xs: 'column-reverse',
                            sm: 'row'
                        }
                    }}
                    borderRadius={5}
                    mt="10px"
                    px="20px"
                    py="30px"
                    pb="30px"
                    alignItems="center"
                >
                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '50%'
                            }
                        }}
                    >
                        <Stack width="100%" alignItems={'center'}>
                            <Typography
                                fontWeight="600"
                                font-family="Montserrat"
                                color="#414042"
                                width="100%"
                                px="10%"
                                sx={{
                                    fontSize: {
                                        xs: '32px',
                                        sm: '32px',
                                        lg: '35px'
                                    },
                                    lineHeight: '39px'
                                }}
                            >
                                <FormattedMessage id="contact_h1" />
                            </Typography>
                            <br />
                            <Typography
                                font-family="Inter"
                                fontWeight="400"
                                color="#414042"
                                width="100%"
                                px="10%"
                                align="justify"
                                sx={{
                                    fontSize: {
                                        xs: '16px',
                                        sm: '16px',
                                        lg: '18px'
                                    }
                                }}
                            >
                                <FormattedMessage id="contact_ct1" />
                            </Typography>
                            <br />
                            <Typography
                                font-family="Montserrat"
                                fontWeight="600"
                                color="#414042"
                                width="100%"
                                px="10%"
                                align="justify"
                                sx={{
                                    fontSize: {
                                        xs: '16px',
                                        sm: '16px',
                                        lg: '18px'
                                    }
                                }}
                            >
                                <FormattedMessage id="contact_h2" />
                            </Typography>
                            <br />
                            <Typography
                                font-family="Montserrat"
                                fontWeight="600"
                                color="#414042"
                                width="100%"
                                px="10%"
                                align="justify"
                                sx={{
                                    fontSize: {
                                        xs: '16px',
                                        sm: '16px',
                                        lg: '18px'
                                    }
                                }}
                            >
                                <img src={traXemAgri} alt="bg" width="53px" height="32px" style={{ margin: '5px' }} />
                                <img src={traXemMarket} alt="bg" width="143px" height="32px" style={{ margin: '5px' }} />
                                <img src={traXemSCM} alt="bg" width="92px" height="32px" style={{ margin: '5px' }} />
                                <img src={smeAccel} alt="bg" width="97px" height="32px" style={{ margin: '5px' }} />
                                <img src={emPL} alt="bg" width="84px" height="32px" style={{ margin: '5px' }} />
                                <img src={emTeller} alt="bg" width="143px" height="32px" style={{ margin: '5px' }} />
                                <img src={aceCRM} alt="bg" width="102px" height="32px" style={{ margin: '5px' }} />
                                <img src={instanceView} alt="bg" width="96px" height="32px" style={{ margin: '5px' }} />
                                <img src={eMedia} alt="bg" width="116px" height="32px" style={{ margin: '5px' }} />
                            </Typography>
                            <br />

                            <Typography
                                font-family="Montserrat"
                                fontWeight="500"
                                color="#414042"
                                width="100%"
                                px="10%"
                                align="justify"
                                sx={{
                                    fontSize: {
                                        xs: '16px',
                                        sm: '16px',
                                        lg: '18px'
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: '#e0f7ef',
                                        borderRadius: '8px',
                                        width: '100%',
                                        maxWidth: '600px',
                                        margin: '0 auto'
                                    }}
                                >
                                    <Typography
                                        fontFamily="Inter"
                                        fontWeight="700"
                                        color="#414042"
                                        width="100%"
                                        textAlign="left"
                                        sx={{
                                            fontSize: {
                                                xs: '16px',
                                                sm: '16px',
                                                lg: '20px'
                                            },
                                            marginBottom: '10px'
                                        }}
                                    >
                                        <FormattedMessage id="contact_company" />
                                    </Typography>

                                    <Box sx={{ display: 'flex', marginBottom: '5px' }}>
                                        <Typography
                                            fontWeight="500"
                                            fontSize="16px"
                                            lineHeight="24px"
                                            width="25%"
                                            style={{ textAlign: 'left' }}
                                        >
                                            <FormattedMessage id="contact_mst" />
                                        </Typography>
                                        <Typography fontWeight="400" fontSize="16px" lineHeight="24px">
                                            <FormattedMessage id="contact_mst2" />
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', marginBottom: '5px' }}>
                                        <Typography
                                            fontWeight="500"
                                            fontSize="16px"
                                            lineHeight="24px"
                                            width="25%"
                                            style={{ textAlign: 'left' }}
                                        >
                                            <FormattedMessage id="contact_address" />
                                        </Typography>
                                        <Typography fontWeight="400" fontSize="16px" lineHeight="24px" flex="1">
                                            <FormattedMessage id="contact_address2" />
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', marginBottom: '5px' }}>
                                        <Typography
                                            fontWeight="500"
                                            fontSize="16px"
                                            lineHeight="24px"
                                            width="25%"
                                            style={{ textAlign: 'left' }}
                                        >
                                            <FormattedMessage id="contact_phone" />
                                        </Typography>
                                        <Typography fontWeight="400" fontSize="16px" lineHeight="24px">
                                            <FormattedMessage id="contact_phone2" />
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', marginBottom: '5px' }}>
                                        <Typography
                                            fontWeight="500"
                                            fontSize="16px"
                                            lineHeight="24px"
                                            width="25%"
                                            style={{ textAlign: 'left' }}
                                        >
                                            <FormattedMessage id="contact_email" />
                                        </Typography>
                                        <Typography fontWeight="400" fontSize="16px" lineHeight="24px">
                                            <FormattedMessage id="contact_email2" />
                                        </Typography>
                                    </Box>
                                </Box>
                            </Typography>
                        </Stack>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '50%'
                            }
                        }}
                    >
                        <Grid
                            style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '2px 2px 2px 2px #AAA' }}
                        >
                            <form style={{ width: '100%', marginTop: '30px' }} onSubmit={handleSubmit(onSubmit)}>
                                <Controller
                                    name="name"
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField
                                            variant="outlined"
                                            sx={{ 'form .MuiInputBase-input': { background: '#fffff !important' } }}
                                            label={<FormattedMessage id="lb_fullname" />}
                                            value={value}
                                            onChange={onChange}
                                            fullWidth
                                            margin="normal"
                                            error={!!errors.name?.message}
                                        />
                                    )}
                                />
                                <Grid container direction="row" spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Controller
                                            name="phoneNum"
                                            control={control}
                                            render={({ field: { onChange, value } }) => (
                                                <TextField
                                                    variant="outlined"
                                                    sx={{ 'form .MuiInputBase-input': { background: '#fffff' } }}
                                                    label={<FormattedMessage id="lb_phone" />}
                                                    value={value}
                                                    onChange={onChange}
                                                    fullWidth
                                                    margin="normal"
                                                    error={!!errors.phoneNum?.message}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Controller
                                            name="email"
                                            control={control}
                                            render={({ field: { onChange, value } }) => (
                                                <TextField
                                                    variant="outlined"
                                                    sx={{ 'form .MuiInputBase-input': { background: '#fffff' } }}
                                                    label={<FormattedMessage id="lb_email" />}
                                                    value={value}
                                                    onChange={onChange}
                                                    fullWidth
                                                    margin="normal"
                                                    error={!!errors.email?.message}
                                                />
                                            )}
                                        />
                                    </Grid>
                                </Grid>
                                <Controller
                                    name="message"
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField
                                            type="textarea"
                                            multiline
                                            rows={4}
                                            label={<FormattedMessage id="lb_messenger" />}
                                            value={value}
                                            onChange={onChange}
                                            fullWidth
                                            margin="normal"
                                            error={!!errors.message?.message}
                                        />
                                    )}
                                />
                                <Grid container direction="row" justifyContent="space-between">
                                    <Grid item xs={12} sm={12}>
                                        <Controller
                                            name="captvalue"
                                            control={control}
                                            render={({ field: { onChange, value } }) => (
                                                <Stack
                                                    mt={2}
                                                    mb={1}
                                                    direction="row"
                                                    gap={1}
                                                    alignItems="center"
                                                    sx={{ width: { xs: '100%' } }}
                                                >
                                                    <Captcha ref={captchaRef} />
                                                    <TextField
                                                        label={<FormattedMessage id="lb_captcha" />}
                                                        value={value}
                                                        onChange={onChange}
                                                        sx={{ width: '100%' }}
                                                        error={!!errors.captvalue?.message}
                                                    />
                                                </Stack>
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Button
                                            type="submit"
                                            sx={{
                                                width: {
                                                    xs: '100%'
                                                },
                                                color: 'white',
                                                backgroundColor: '#00A64F',
                                                ':hover': { color: 'white', background: '#00A64F' }
                                            }}
                                            disabled={isSubmitting}
                                        >
                                            <FormattedMessage id="contact_btn" />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Box>
                </Stack>
            </section>
        </>
    );
};
export default ContactUs;