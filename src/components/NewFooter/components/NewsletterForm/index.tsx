'use client';

import React, { useState } from 'react';
import EmailIcon from '../../../../assets/mail.svg';
import styles from './styles.module.scss';
import { classes } from '../../../../utils';

const GHOST_MAGIC_LINK_URL = 'https://blog.zano.org/members/api/send-magic-link/';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || status === 'loading') return;

        setStatus('loading');
        try {
            const res = await fetch(GHOST_MAGIC_LINK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, emailType: 'subscribe' }),
            });
            if (res.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return <p className={styles.success}>Check your inbox to confirm your subscription.

</p>;
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.form__content}>
                <div className={classes(styles.form__input, status === 'loading' && styles.disabled)}>
                    <EmailIcon />

                    <input
                        type="email"
                        className={styles.input}
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={status === 'loading'}
                    />
                </div>

                <button
                    type="submit"
                    className={styles.form__button}
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? '...' : 'Subscribe'}
                </button>
            </div>

            {status === 'error' && <p className={styles.error}>Something went wrong. Try again.</p>}
        </form>
    );
};

export default NewsletterForm;
