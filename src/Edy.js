import '@aws-amplify/ui-react/styles.css';
import { View, Flex, Button, useTheme, TextField, SelectField } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useState } from 'react';

const Edy = () => {

    const { tokens } = useTheme()

    const [formData, setFormData] = useState({
        applicationNumber: "MOSHIKOMI123456",
        userId: "USER123456",
        identificationDocument: "02"
    });

    // POSTするボタンクリック時
    const onSubmit = async () => {
        console.log("onSubmit.")
        console.log("formData", formData)
        const url = 'https://c5gzw5serf.execute-api.ap-northeast-1.amazonaws.com/dev/post1';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('An error has occurred! ', error);
        }
    }

    // キー入力時
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        /*
        <Authenticator signUpAttributes={[
            'email',
            'nickname',
        ]}>
        {({ signOut, user }) => (
        */
            <>
                <View
                    backgroundColor={tokens.colors.background.secondary}
                    padding={tokens.space.medium}
                >
                    <Flex
                        justifyContent="flex-end"
                        style={{
                            paddingBottom: '20px',
                            position: 'sticky',
                            top: 0, // 画面上部からの位置を指定します
                            zIndex: 1, // 必要に応じてz-indexを調整します
                        }}
                    >
                        <Button variation="warning" onClick={() => onSubmit()} size="large">APIを呼び出す</Button>
                    </Flex>
                    <Flex direction="column">
                        <TextField
                            onChange={handleInputChange}
                            name="applicationNumber"
                            descriptiveText="事業者にてeKYC利用者を識別する申込番号等を設定"
                            placeholder="申込番号"
                            label="申込番号"
                            value={formData.applicationNumber}
                        />
                        <TextField
                            onChange={handleInputChange}
                            name="userId"
                            descriptiveText="ポラリファイにて利用者ごとに採番したユニークなID"
                            placeholder="eKYCユーザーID"
                            label="eKYCユーザーID"
                            value={formData.userId}
                        />
                        <SelectField
                            onChange={handleInputChange}
                            name="identificationDocument"
                            label="本人確認書類"
                            descriptiveText="本人確認書類"
                            value={formData.identificationDocument}
                        >
                            <option value="01">運転免許証</option>
                            <option value="02">マイナンバーカード</option>
                            <option value="03" disabled>在留カード</option>
                            <option value="04">保険証</option>
                            <option value="05">パスポート</option>
                            <option value="06">住民基本台帳カード</option>
                            <option value="07">運転経歴証明書</option>
                            <option value="08">特別永住者証明書</option>
                        </SelectField>
                        
                    </Flex>
                </View>
            </>
        /*
        )}
        </Authenticator>
        */
    )
}

export default Edy