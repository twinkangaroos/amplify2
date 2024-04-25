import '@aws-amplify/ui-react/styles.css';
import { View, Flex, Button, useTheme, Text, TextField, SelectField, Heading,
    Divider, RadioGroupField, Radio, CheckboxField } from '@aws-amplify/ui-react';
import { useState } from 'react';

const EntryConstruction = () => {

    const { tokens } = useTheme()

    return (
            <>
                <View
                    backgroundColor={tokens.colors.background.secondary}
                    padding={tokens.space.medium}
                    style={{ textAlign: 'left' }}
                >
                    
                    <Flex direction="column" 
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        alignContent="flex-start"
                        wrap="nowrap"
                        gap="1rem"
                    >
                        
                        <Heading level={3}>
                            基本データ入力画面
                        </Heading>
                        
                        <TextField
                            label="工事名"
                            value="XXX新築工事"
                            disabled="true"
                        />
                        <TextField
                            label="ファイル工事名"
                            value="XXX新築工事"
                        />
                        
                        <Heading level={4}>
                            工事情報
                        </Heading>
                        <Divider orientation="horizontal" />
                        
                        <Heading level={6}>
                            名称・場所
                        </Heading>
                        <Divider orientation="horizontal" size="small" />

                        <Flex direction="row">
                            <TextField
                                label="正式建物名称"
                                value="XXX建物"
                            />
                            <SelectField
                                label="　"
                                value=""
                            >
                                <option value="01">新築</option>
                                <option value="01">増築</option>
                                <option value="01">改修</option>
                                <option value="01">保守工事</option>
                            </SelectField>
                        </Flex>
                        <TextField
                            label="施工場所"
                            value=""
                        />

                        <Heading level={6}>
                            アクセス
                        </Heading>
                        <Divider orientation="horizontal" size="small" />

                        <Flex direction="row"> 
                            <TextField
                                label="交通機関・最寄駅"
                                value=""
                                placeholder='JR東海線'
                            />
                            <TextField
                                label="　"
                                value=""
                                placeholder='東淀川駅'
                            />
                            <TextField
                                label="バス停留所"
                                value=""
                                placeholder='東淀川停留所'
                            />
                        </Flex>
                        <SelectField
                            label="場内駐車可否"
                            value=""
                        >
                            <option value="01">現場内可</option>
                            <option value="01">近隣駐車場</option>
                        </SelectField>

                        <Heading level={6}>
                            建物規模
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        
                        <RadioGroupField
                            label="建物棟数"
                            name="language"
                            defaultValue='1'
                        >
                            <Radio value="1">１棟</Radio>
                            <Radio value="2">２棟</Radio>
                            <Radio value="3">３棟</Radio>
                        </RadioGroupField>
                        <SelectField
                            label="建物用途"
                            value=""
                        >
                            <option value="01"></option>
                        </SelectField>
                        <SelectField
                            label="建物規模（構造）"
                            value=""
                        >
                            <option value="01">S</option>
                            <option value="01">RC</option>
                            <option value="01">SRC</option>
                            <option value="01">W</option>
                        </SelectField>
                        <SelectField
                            label="建物規模（耐震）"
                            value=""
                        >
                            <option value="01">免震</option>
                            <option value="01">耐震</option>
                            <option value="01">制振</option>
                        </SelectField>
                        <TextField
                            label="建物規模（階数）"
                            value=""
                            placeholder=''
                        />
                        <TextField
                            label="建物規模（延床面積）"
                            value=""
                            placeholder='m2'
                        />
                        <TextField
                            label="建物規模（軒高）"
                            value=""
                            placeholder='m'
                        />
                        <TextField
                            label="建物規模（住宅戸数）"
                            value=""
                            placeholder='戸'
                        />
                        <TextField
                            label="建物規模（病院ベット数）"
                            value=""
                            placeholder='ベット'
                        />
                        <TextField
                            label="建物規模（宿泊客室数）"
                            value=""
                            placeholder='室'
                        />
                        
                        <SelectField
                            label="建物規模（防火対象物）"
                            value=""
                        >
                            <option value="01"></option>
                        </SelectField>


                        <Heading level={6}>
                            設備規模（電気）
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        <TextField
                            label="設備規模（受電電圧）"
                            value=""
                            placeholder='v'
                        />
                        <SelectField
                            label="設備規模（受電方式）"
                            value=""
                        >
                            <option value="01"></option>
                        </SelectField>
                        <TextField
                            label="設備規模（契約電力）"
                            value=""
                            placeholder='kw'
                        />
                        <TextField
                            label="設備規模（設備容量）TR容量"
                            value=""
                            placeholder='kv'
                        />
                        <SelectField
                            label="発電機台数"
                            value=""
                        >
                            <option value="01">１台</option>
                        </SelectField>
                        <SelectField
                            label="発電機（常用・非常用）"
                            value=""
                        >
                            <option value="01">常用</option>
                            <option value="01">非常用</option>
                        </SelectField>

                        <SelectField
                            label="発電機（種別）"
                            value=""
                        >
                            <option value="01">DE</option>
                            <option value="01">GE</option>
                            <option value="01">GT</option>
                            <option value="01">MGT</option>
                        </SelectField>
                        <TextField
                            label="発電機（容量）"
                            value=""
                            placeholder='kw'
                        />
                        <TextField
                            label="発電機（台数）"
                            value=""
                            placeholder='台'
                        />
                        <TextField
                            label="発電機（電圧）"
                            value=""
                            placeholder='v'
                        />
                        <TextField
                            label="発電機（回転数）"
                            value=""
                            placeholder='rpm'
                        />
                        <TextField
                            label="発電機（騒音）"
                            value=""
                            placeholder='db'
                        />
                        <SelectField
                            label="発電機（燃料）"
                            value=""
                        >
                            <option value="01">重油</option>
                            <option value="01">経由</option>
                            <option value="01">中圧ガス</option>
                        </SelectField>
                        <SelectField
                            label="発電機（冷却方式）"
                            value=""
                        >
                            <option value="01">空冷</option>
                            <option value="01">水冷</option>
                        </SelectField>

                        <TextField
                            label="燃料小出槽（容量）"
                            value=""
                            placeholder='L'
                        />
                        <TextField
                            label="燃料小出槽（台数）"
                            value=""
                            placeholder=''
                        />

                        <SelectField
                            label="オイルタンク（設置方式）"
                            value=""
                        >
                            <option value="01">地上</option>
                            <option value="01">地下</option>
                            <option value="01">地下タンク二重殻</option>
                        </SelectField>

                        <TextField
                            label="オイルタンク（容量）"
                            value=""
                            placeholder='kL'
                        />
                        <TextField
                            label="オイルタンク（個数）"
                            value=""
                            placeholder='台'
                        />

                        <SelectField
                            label="蓄電池（用途）"
                            value=""
                        >
                            <option value="01">制御用</option>
                            <option value="01">非常照明用</option>
                            <option value="01">両用</option>
                        </SelectField>
                        <TextField
                            label="蓄電池（容量）"
                            value=""
                            placeholder='AH'
                        />
                        <TextField
                            label="蓄電池（台数）"
                            value=""
                            placeholder='台'
                        />
                        <TextField
                            label="UPS（出力容量）"
                            value=""
                            placeholder='kVA'
                        />
                        <SelectField
                            label="UPS（入力電源種別）"
                            value=""
                        >
                            <option value="01"></option>
                            <option value="01"></option>
                        </SelectField>
                        <SelectField
                            label="UPS（周波数）"
                            value=""
                        >
                            <option value="01">50Hz</option>
                            <option value="01">60Hz</option>
                        </SelectField>
                        <SelectField
                            label="UPS（出力電源種別）"
                            value=""
                        >
                            <option value="01">50Hz</option>
                            <option value="01">60Hz</option>
                        </SelectField>
                        <SelectField
                            label="UPS（運転方式）"
                            value=""
                        >
                            <option value="01">単機</option>
                            <option value="01">並列冗長</option>
                        </SelectField>
                        <SelectField
                            label="UPS（バッテリー方式）"
                            value=""
                        >
                            <option value="01">HS</option>
                            <option value="01">MSE</option>
                        </SelectField>
                        <TextField
                            label="UPS（台数）"
                            value=""
                            placeholder='台'
                        />

                        <TextField
                            label="太陽光（PV容量）"
                            value=""
                            placeholder='kW'
                        />
                        <SelectField
                            label="太陽光（モジュール種別）"
                            value=""
                        >
                            <option value="01">単結晶</option>
                            <option value="01">多結晶</option>
                        </SelectField>
                        <TextField
                            label="太陽光（モジュール容量）"
                            value=""
                            placeholder='W'
                        />
                        <TextField
                            label="太陽光（PCS容量）"
                            value=""
                            placeholder='kW'
                        />
                        <TextField
                            label="太陽光（PCS台数）"
                            value=""
                            placeholder='台'
                        />

                        <Heading level={6}>
                            設備規模（環境）
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        <SelectField
                            label="主冷熱源（種別）"
                            value=""
                        >
                            <option value="01"></option>
                            <option value="01"></option>
                        </SelectField>
                        <TextField
                            label="主冷熱源（容量）"
                            value=""
                            placeholder='RT'
                        />
                        <TextField
                            label="主冷熱源（台数）"
                            value=""
                            placeholder='台'
                        />
                        <SelectField
                            label="主温熱源（種別）"
                            value=""
                        >
                            <option value="01"></option>
                            <option value="01"></option>
                        </SelectField>
                        <TextField
                            label="主温熱源（容量）"
                            value=""
                            placeholder='RT'
                        />
                        <TextField
                            label="主温熱源（台数）"
                            value=""
                            placeholder='台'
                        />
                        <SelectField
                            label="空調方式"
                            value=""
                        >
                            <option value="01"></option>
                            <option value="01"></option>
                        </SelectField>
                        <TextField
                            label="受水槽（容量）"
                            value=""
                            placeholder="m3"
                        />
                        <TextField
                            label="受水槽（台数）"
                            value=""
                            placeholder="台"
                        />
                        <TextField
                            label="高架水槽（容量）"
                            value=""
                            placeholder="m3"
                        />
                        <TextField
                            label="高架水槽（台数）"
                            value=""
                            placeholder="台"
                        />

                        <Heading level={6}>
                            工事の特徴
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        <TextField
                            label="工事の特徴とポイント"
                            value=""
                            placeholder=""
                        />
                        <TextField
                            label="（リスクのポイント）"
                            value=""
                            placeholder=""
                        />

                        <Heading level={4}>
                            契約
                        </Heading>
                        <Divider orientation="horizontal" />
                        <Heading level={6}>
                            契約内容
                        </Heading>
                        <Divider orientation="horizontal" size="small" />

                        <Flex direction="row">
                            <SelectField
                                label="工事種別"
                                value=""
                            >
                                <option value="01">一般電気</option>
                                <option value="01">空調</option>
                            </SelectField>
                            <SelectField
                                label="工事種別"
                                value=""
                            >
                                <option value="01">一般電気</option>
                                <option value="01">空調</option>
                            </SelectField>
                            <SelectField
                                label="工事種別"
                                value=""
                            >
                                <option value="01">一般電気</option>
                                <option value="01">空調</option>
                            </SelectField>
                            <SelectField
                                label="工事種別"
                                value=""
                            >
                                <option value="01">一般電気</option>
                                <option value="01">空調</option>
                            </SelectField>
                        </Flex>
                        <Flex direction="row">
                            <SelectField
                                label="受注状況"
                                value=""
                            >
                                <option value="01"></option>
                                <option value="01"></option>
                            </SelectField>
                            <TextField
                                label="交渉状況"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <SelectField
                                label="確定・概算"
                                value=""
                            >
                                <option value="01">確定</option>
                                <option value="01">概算</option>
                            </SelectField>
                            <SelectField
                                label="受注予定日"
                                value=""
                            >
                                <option value="01"></option>
                                <option value="01"></option>
                            </SelectField>
                            <SelectField
                                label="受注決定日"
                                value=""
                            >
                                <option value="01"></option>
                                <option value="01"></option>
                            </SelectField>
                        </Flex>
                        
                        <TextField
                            label="見積金額"
                            value=""
                            placeholder=""
                        />
                        <Flex direction="row">
                            <TextField
                                label="見積提出履歴１：提出金額"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="見積番号"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="提出日"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="変更内容"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="見積提出履歴２：提出金額"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="見積番号"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="提出日"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="変更内容"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="見積提出履歴３：提出金額"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="見積番号"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="提出日"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="変更内容"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="見積提出履歴４：提出金額"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="見積番号"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="提出日"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="変更内容"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="見積提出履歴５：提出金額"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="見積番号"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="提出日"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="変更内容"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <SelectField
                            label="契約図面発行日"
                            value=""
                        >
                            <option value="01"></option>
                            <option value="01"></option>
                        </SelectField>
                        <TextField
                            label="受注先"
                            value=""
                            placeholder=""
                        />
                        <TextField
                            label="支払い条件"
                            value=""
                            placeholder=""
                        />
                        <Flex direction="row">
                            <SelectField
                                label="工期：着工"
                                value=""
                            >
                                <option value="01"></option>
                                <option value="01"></option>
                            </SelectField>
                            <SelectField
                                label="工期：完成"
                                value=""
                            >
                                <option value="01"></option>
                                <option value="01"></option>
                            </SelectField>
                            <SelectField
                                label="受電日"
                                value=""
                            >
                                <option value="01"></option>
                                <option value="01"></option>
                            </SelectField>
                        </Flex>

                        <Flex direction="row">
                            <SelectField
                                label="施工形態：着工"
                                value=""
                            >
                                <option value="01">単独</option>
                                <option value="01">JV</option>
                            </SelectField>
                            <TextField
                                label="当社比率（％）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="各社比率（％）"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        
                        
                        <Heading level={7}>
                            施工範囲
                        </Heading>
                        <Flex direction="row">
                            <Heading level={7}>
                                ・電気
                            </Heading>
                            <CheckboxField
                                label="受電"
                                name="subscribe"
                                value="yes"
                            />
                            <CheckboxField
                                label="変電"
                            />
                            <CheckboxField
                                label="発電"
                            />
                            <CheckboxField
                                label="蓄電"
                            />
                            <CheckboxField
                                label="幹線"
                            />
                            <CheckboxField
                                label="動力"
                            />
                            <CheckboxField
                                label="電灯"
                            />
                            <CheckboxField
                                label="火報"
                            />
                            <CheckboxField
                                label="避雷"
                            />
                            <CheckboxField
                                label="時計"
                            />
                            <CheckboxField
                                label="その他"
                            />
                        </Flex>
                        <Flex direction="row">
                            <Heading level={7}>
                                ・軽装
                            </Heading>
                            <CheckboxField
                                label="制御"
                                name="subscribe"
                                value="yes"
                            />
                            <CheckboxField
                                label="監視"
                            />
                            <CheckboxField
                                label="防犯"
                            />
                            <CheckboxField
                                label="入出退"
                            />
                            <CheckboxField
                                label="駐車"
                            />
                            <CheckboxField
                                label="搬送"
                            />
                            <CheckboxField
                                label="計装工事"
                            />
                            <CheckboxField
                                label="その他"
                            />
                        </Flex>
                        <Flex direction="row">
                            <Heading level={7}>
                                ・通信
                            </Heading>
                            <CheckboxField
                                label="制御"
                                name="subscribe"
                                value="yes"
                            />
                            <CheckboxField
                                label="ＬＡＮ"
                            />
                            <CheckboxField
                                label="通信"
                            />
                            <CheckboxField
                                label="ＴＶ共聴"
                            />
                            <CheckboxField
                                label="インターホン"
                            />
                            <CheckboxField
                                label="放送"
                            />
                            <CheckboxField
                                label="電話"
                            />
                            <CheckboxField
                                label="AV"
                            />
                            <CheckboxField
                                label="ITV"
                            />
                            <CheckboxField
                                label="その他"
                            />
                        </Flex>
                        <Flex direction="row">
                            <Heading level={7}>
                                ・空調
                            </Heading>
                            <CheckboxField
                                label="熱源"
                                name="subscribe"
                                value="yes"
                            />
                            <CheckboxField
                                label="空調"
                            />
                            <CheckboxField
                                label="配管"
                            />
                            <CheckboxField
                                label="ダクト"
                            />
                            <CheckboxField
                                label="換気"
                            />
                            <CheckboxField
                                label="排煙"
                            />
                            <CheckboxField
                                label="自動制御"
                            />
                            <CheckboxField
                                label="ＣＧＳ"
                            />
                            <CheckboxField
                                label="ユーティリティ"
                            />
                            <CheckboxField
                                label="エアー"
                            />
                            <CheckboxField
                                label="蒸気"
                            />
                            <CheckboxField
                                label="ＣＲ"
                            />
                            <CheckboxField
                                label="恒温恒湿"
                            />
                            <CheckboxField
                                label="蓄熱"
                            />
                            <CheckboxField
                                label="その他"
                            />
                        </Flex>
                        <Flex direction="row">
                            <Heading level={7}>
                                ・衛生
                            </Heading>
                            <CheckboxField
                                label="給水"
                                name="subscribe"
                                value="yes"
                            />
                            <CheckboxField
                                label="中水"
                            />
                            <CheckboxField
                                label="給湯"
                            />
                            <CheckboxField
                                label="排水"
                            />
                            <CheckboxField
                                label="衛生器具"
                            />
                            <CheckboxField
                                label="油"
                            />
                            <CheckboxField
                                label="ガス"
                            />
                            <CheckboxField
                                label="浄化槽"
                            />
                            <CheckboxField
                                label="濾過"
                            />
                            <CheckboxField
                                label="医療ガス"
                            />
                            <CheckboxField
                                label="集塵"
                            />
                            <CheckboxField
                                label="その他"
                            />
                        </Flex>
                        <Flex direction="row">
                            <Heading level={7}>
                                ・消火
                            </Heading>
                            <CheckboxField
                                label="屋内消火栓"
                                name="subscribe"
                                value="yes"
                            />
                            <CheckboxField
                                label="連結送水"
                            />
                            <CheckboxField
                                label="ＳＰ"
                            />
                            <CheckboxField
                                label="泡消火"
                            />
                            <CheckboxField
                                label="粉末消火"
                            />
                            <CheckboxField
                                label="ハロン消火"
                            />
                            <CheckboxField
                                label="その他"
                            />
                        </Flex>
                        <Flex direction="row">
                            <Heading level={7}>
                                ・内装
                            </Heading>
                            <CheckboxField
                                label="一般内装"
                                name="subscribe"
                                value="yes"
                            />
                            <CheckboxField
                                label="住宅内装"
                            />
                            <CheckboxField
                                label="システム天井"
                            />
                            <CheckboxField
                                label="軽量鉄骨ボード"
                            />
                            <CheckboxField
                                label="ＦＡフロア"
                            />
                            <CheckboxField
                                label="ＦＰ"
                            />
                            <CheckboxField
                                label="インテリア"
                            />
                            <CheckboxField
                                label="金属"
                            />
                            <CheckboxField
                                label="建築"
                            />
                            <CheckboxField
                                label="その他"
                            />
                        </Flex>
                        <TextField
                            label="延工数"
                            value=""
                            placeholder="人"
                        />
                        <TextField
                            label="ピーク予想人員"
                            value=""
                            placeholder="人"
                        />
                        
                        <Heading level={6}>
                            受注条件
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        <TextField
                            label="受注（営業背景）"
                            value=""
                            placeholder=""
                        />
                        <TextField
                            label="受注（受注経緯）"
                            value=""
                            placeholder=""
                        />
                        <SelectField
                            label="受注検討会開催"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="リスク上申"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（別途工事有無内容）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <TextField
                            label="（追加予定・今後の予定）"
                            value=""
                            placeholder=""
                        />
                        <SelectField
                            label="（ＶＥ・ＣＤ取扱い）"
                            value=""
                        >
                            <option value="01">確認中</option>
                            <option value="01">増減清算</option>
                        </SelectField>
                        <SelectField
                            label="（損害保険 要・不要）"
                            value=""
                        >
                            <option value="01">要</option>
                            <option value="01">不要</option>
                        </SelectField>
                        <SelectField
                            label="（外注業者推薦 有無）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（メーカー推薦 有無）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（代理店推薦 有無）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（斡旋手数料 有無）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（ その他の有無）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                    
                        <Heading level={6}>
                            相殺
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        <SelectField
                            label="（現場事務所費用負担）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（工事用電力・上下水道使用料）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（産業廃棄物処理）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（高所作業車）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（揚重施設）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（揚重センター）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（仮設材・足場材）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（引渡迄の電気代）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（工事中の主任技術者費用）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（共益費）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（有償支給材有無）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（天井開口墨出し開口補強）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（仮設電気工事有無）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>

                        <Heading level={4}>
                            品質
                        </Heading>
                        <Divider orientation="horizontal" />
                        <Heading level={6}>
                            品質
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        <SelectField
                            label="（要求品質仕様書）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <TextField
                            label="（客先要求事項）"
                            value=""
                            placeholder=""
                        />
                        <SelectField
                            label="（設計応援）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <TextField
                            label="（運営方針）"
                            value=""
                            placeholder=""
                        />

                        <Heading level={6}>
                            所長方針（重点管理）
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        <TextField
                            label="（安全）"
                            value=""
                            placeholder=""
                        />
                        <TextField
                            label="（品質）"
                            value=""
                            placeholder=""
                        />
                        <TextField
                            label="（環境）"
                            value=""
                            placeholder=""
                        />
                        <TextField
                            label="（コンプライアンス）"
                            value=""
                            placeholder=""
                        />
                        <TextField
                            label="（働き方改革）"
                            value=""
                            placeholder=""
                        />
                        <TextField
                            label="工事部の懸案事項"
                            value=""
                            placeholder=""
                        />

                        <Heading level={6}>
                            法規制
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        <SelectField
                            label="電気工事士法・電気工事業法"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="仮設発電機使用(10kW以上)"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="電気主任技術者の選任"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="石綿事前調査結果報告"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <TextField
                            label="産業廃棄物処理"
                            value=""
                            placeholder=""
                        />
                        <TextField
                            label="事業系一般廃棄物の処理"
                            value=""
                            placeholder=""
                        />
                        <TextField
                            label="有価物(電線・金属屑)の処理"
                            value=""
                            placeholder=""
                        />

                        <Heading level={6}>
                            検査
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        <SelectField
                            label="支店(社)巡回検査"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="支店(社)竣工検査"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="本店巡回点検"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="本店巡回検査"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="本店特別検査"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>

                        <Heading level={6}>
                            技術成果
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        <SelectField
                            label="（本店表彰工事）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（技術成果発表会）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（きんでんれびゅー）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>
                        <SelectField
                            label="（電気設備学会）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>

                        <Heading level={6}>
                            保守
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        <SelectField
                            label="（２４センター）"
                            value=""
                        >
                            <option value="01">有</option>
                            <option value="01">無</option>
                        </SelectField>

                        <Heading level={4}>
                            工事体制
                        </Heading>
                        <Divider orientation="horizontal" />
                        <Heading level={6}>
                            関係先
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        <Flex direction="row">
                            <TextField
                                label="（施主責任者）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（施主窓口）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（受注先責任者）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（受注先窓口）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（建築業者）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（統括安全衛生責任者）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（元方安全衛生管理者）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（設計監理者）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（電気業者（当社））"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（電気業者（他社））"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（電気業者（他社））"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（空調業者）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（空調業者）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（衛生業者）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（衛生業者）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（その他業者）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（その他業者）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <TextField
                                label="（電気主任技術者）"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="役職"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="氏名"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="連絡先"
                                value=""
                                placeholder=""
                            />
                        </Flex>

                        <Heading level={6}>
                            当社
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        <Flex direction="row">
                            <SelectField
                                label="工事担当課所"
                                value=""
                            >
                                <option value="01"></option>
                                <option value="01"></option>
                            </SelectField>
                            <TextField
                                label="電話番号"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <Flex direction="row">
                            <SelectField
                                label="社内ＪＶの有無"
                                value=""
                            >
                                <option value="01">有</option>
                                <option value="01">無</option>
                            </SelectField>
                            <TextField
                                label="パートナー"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="パートナー"
                                value=""
                                placeholder=""
                            />
                            <TextField
                                label="パートナー"
                                value=""
                                placeholder=""
                            />
                        </Flex>
                        <TextField
                            label="現場事務所住所"
                            value=""
                            placeholder=""
                        />

                        

                        
                        <Heading level={4}>
                            行事予定
                        </Heading>
                        <Divider orientation="horizontal" />
                        <Heading level={6}>
                            会議（現場）
                        </Heading>
                        <Divider orientation="horizontal" size="small" />

                        <Heading level={6}>
                            会議（社内）
                        </Heading>
                        <Divider orientation="horizontal" size="small" />




                        <Heading level={4}>
                            着工前提出届出
                        </Heading>
                        <Divider orientation="horizontal" />
                        <Heading level={6}>
                            承諾・届
                        </Heading>
                        <Divider orientation="horizontal" size="small" />
                        

                        <Heading level={4}>
                            現入時解説準備
                        </Heading>
                        <Divider orientation="horizontal" />
                        <Heading level={6}>
                            工事・安全関係・提示物
                        </Heading>
                        <Divider orientation="horizontal" size="small" />



                        <Heading level={4}>
                            緊急連絡票
                        </Heading>
                        <Divider orientation="horizontal" />
                        <Heading level={6}>
                            　
                        </Heading>
                        <Divider orientation="horizontal" size="small" />







                    </Flex>
                </View>
            </>
    )
}

export default EntryConstruction