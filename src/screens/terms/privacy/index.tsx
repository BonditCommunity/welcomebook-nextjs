'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Sheet } from '@/components/layout/sheet';
import { IH2 } from '@/components/typography/IH2';
import { useTheme } from '@/hooks/common/use-theme';
import { IBody2 } from '@/components/typography/IBody2';
import { sizing } from '@/screens/terms/@constants';

export function Privacy() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <Sheet>
            <IH2
                color={theme.text.white}
                style={{
                    marginTop: sizing.title.gap,
                }}>
                {t('privacyTitle')}
            </IH2>
            <IBody2
                color={theme.text.white}
                style={{
                    marginTop: sizing.content.gap,
                }}>
                This Policy explains the way of treatment of the information
                which is provided or collected in the web sites on which this
                Policy is posted. In addition the Policy also explains the
                information which is provided or collected in the course of
                using the applications of the Company which exist in the
                websites or platforms of other company.
            </IBody2>
            <IBody2
                color={theme.text.white}
                style={{
                    marginTop: sizing.content.gap,
                }}>
                The Company is the controller of the information provided or
                collected in the websites on which this Policy is posted and in
                the course of using the applications of the Company which exist
                in the websites or platforms of other company. Through this
                Policy, the Company regards personal information of the users as
                important and inform them of the purpose and method of
                Company&apos;s using the personal information provided by the
                users and the measures taken by the Company for protection of
                those personal information
            </IBody2>
            <IBody2
                color={theme.text.white}
                style={{
                    marginTop: sizing.content.gap,
                }}>
                (1) Personal information items to be collected Personal
                information items to be collected by the Company are as follows:
                Name, address, telephone number, and email address ∘ Payment
                information including account number and card number ∘ Delivery
                information including delivery address, name and contact
                information of recipient ∘ Information of place of taking
                pictures and date of creation of files ∘ Information of service
                use of members such as the type of contents watched or used by
                members, the persons interacting or sharing contents with
                members, frequencies and period of activities of members.
            </IBody2>
        </Sheet>
    );
}
