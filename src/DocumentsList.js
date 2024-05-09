import React, { useState } from 'react';
import '@aws-amplify/ui-react/styles.css';
import {
    View, Flex, useTheme, SelectField, Link
} from '@aws-amplify/ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faFolder, faFile, faFolderOpen } from '@fortawesome/free-regular-svg-icons';

// ダミーのフォルダ構造
const folders = {
    '営業関連書類': {
        label: 'A',
        subfolders: {
            '現場説明資料': {
                label: 'A',
                files: [
                    'ＥＱＵＩＮＩＸＯＳ２ｘ発電機燃料フィルター対応工事_設計引合書１.docx',
                    'ＥＱＵＩＮＩＸＯＳ２ｘ発電機燃料フィルター対応工事_設計引合書２.docx'
                ],
            },
            '設計図書－設計図書': {
                label: 'A',
                files: [],
            },
            '設計図書－設計計算書': {
                label: 'A',
                files: [],
            },
            '設計図書－確認申請書': {
                label: 'A',
                files: [],
            },
            '設計図書－防災計画書': {
                label: 'A',
                files: [],
            },
            '発注者仕様書': {
                label: 'A',
                files: [],
            },
        },
    },
    '積算関係書類': {
        label: 'AB',
        subfolders: {
            '営業引継書・設計引継書・積算引継書': {
                label: '',
                files: [],
            },
            '質疑応答書': {
                label: 'A',
                files: [],
            },
            '【積算時提案書】-積算時ＶＥ案': {
                label: 'AB',
                files: [],
            },
            '【積算時提案書】-積算時技術提案': {
                label: 'AB',
                files: [],
            },
            '拾い出し表・データ': {
                label: '',
                files: [],
            },
        },
    },
    '会議書類': {
        label: 'AB',
        subfolders: {
            '【事前検討・施工計画・完工会議記録】表紙（回覧記録付）': {
                label: 'AB',
                files: [],
            },
            '【事前検討・施工計画・完工会議記録】事前検討・施工計画・完工会議実施議事録(目標・管理物件指定)': {
                label: 'AB',
                files: [],
            },
            '【事前検討・施工計画・完工会議記録】現場基本情報': {
                label: 'AB',
                files: [],
            },
            '【事前検討・施工計画・完工会議記録】施工計画検討書': {
                label: 'AB',
                files: [],
            },
            '【事前検討・施工計画・完工会議記録】施工結果評価表・報告書（１）': {
                label: '',
                files: [],
            },
            '【事前検討・施工計画・完工会議記録】施工結果評価表・報告書（２）技術成果項目リスト': {
                label: '',
                files: [],
            },
            '【技術成果説明書（水平展開資料）】技術成果説明書': {
                label: '',
                files: [],
            },
            '支店(社)リスク管理物件状況報告書': {
                label: '',
                files: [],
            },
            '着工会議議事録(A3)': {
                label: '',
                files: [],
            },
            '着工会議議事録(A4)': {
                label: '',
                files: [],
            },
            '職場安全衛生会議議事録': {
                label: '',
                files: [],
            },
            '安全衛生環境協議会議事録': {
                label: '',
                files: [],
            },
            '周知会議事録': {
                label: '',
                files: [],
            },
            '災害事例検討会議事録': {
                label: '',
                files: [],
            },
            '発注者との打合せ議事録': {
                label: '',
                files: [],
            },
        },
    },
    '品質管理書類 Q': {
        label: 'AB',
        subfolders: {
            '総括管理表(A3版）': {
                label: 'AB',
                files: [],
            },
            '【工事概要・現場ルール】工事概要': {
                label: 'AB',
                files: [],
            },
            '【工事概要・現場ルール】現場ルール': {
                label: 'AB',
                files: [],
            },
            '現場組織表・役割分担表': {
                label: 'AB',
                files: [],
            },
            '着工前問題点抽出チェックリスト(基本編）': {
                label: 'AB',
                files: [],
            },
            '着工前問題点抽出チェックリスト(リニューアル編）': {
                label: 'AB',
                files: [],
            },
            '施工品質検討書': {
                label: 'AB',
                files: [],
            },
            '居ながら工事調査票・現調ノート': {
                label: 'A',
                files: [],
            },
            '施工合理化、省力化チェックリスト(1)(2)': {
                label: 'A',
                files: [],
            },
            '【ゾーニング図 ・施工管理用系統図・単線結線図】ゾーニング図': {
                label: 'A',
                files: [],
            },
            '【ゾーニング図 ・施工管理用系統図・単線結線図】施工管理用系統図': {
                label: 'A',
                files: [],
            },
            '【ゾーニング図 ・施工管理用系統図・単線結線図】単線結線図': {
                label: 'A',
                files: [],
            },
            '【施工区分図・区分表】施工区分図': {
                label: '',
                files: [],
            },
            '【施工区分図・区分表】施工区分表': {
                label: '',
                files: [],
            },
            '技術計算書管理リスト': {
                label: '',
                files: [],
            },
            '施工要領書管理リスト': {
                label: '',
                files: [],
            },
            '施工図管理リスト': {
                label: '',
                files: [],
            },
            '納入仕様書管理リスト': {
                label: '',
                files: [],
            },
            '【技術計算書】電灯変圧器容量計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】電灯幹線計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】電灯負荷容量集計表（一括）': {
                label: '',
                files: [],
            },
            '【技術計算書】電灯設備負荷表（詳細）': {
                label: '',
                files: [],
            },
            '【技術計算書】電灯分電盤結線図': {
                label: '',
                files: [],
            },
            '【技術計算書】動力変圧器容量計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】灯動変圧器容量計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】動力幹線計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】動力負荷容量集計表（一括）': {
                label: '',
                files: [],
            },
            '【技術計算書】動力設備負荷表（詳細）': {
                label: '',
                files: [],
            },
            '【技術計算書】短絡電流計算': {
                label: '',
                files: [],
            },
            '【技術計算書】ＣＴ容量計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】過電流保護協調': {
                label: '',
                files: [],
            },
            '【技術計算書】Ｂ種接地抵抗値計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】遮断容量計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】コンデンサ容量計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】高調波流出電流計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】ケーブルラック幅計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】ケーブルラック耐震計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】受変電耐震計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】キュービクル式高圧受電設備の換気容量計算': {
                label: '',
                files: [],
            },
            '【技術計算書】発電機耐震計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】発電機騒音計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】蓄電池容量計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】蓄電池耐震計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】動力・分電・端子盤耐震計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】照度計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】ＡＭＰ容量計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】テレビアンテナ風圧計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】TV共聴電界強度損失計算書': {
                label: '',
                files: [],
            },
            '【技術計算書】避雷設備風圧計算書': {
                label: '',
                files: [],
            },
            '【試験・調整・検査計画書】総合試運転調整計画書': {
                label: '',
                files: [],
            },
            '【試験・調整・検査計画書】送電計画書': {
                label: '',
                files: [],
            },
            '【試験・調整・検査計画書】自主検査計画書（自主検査計画例①）': {
                label: '',
                files: [],
            },
            '【試験・調整・検査計画書】自主検査計画書（自主検査計画例②電力設備）': {
                label: '',
                files: [],
            },
            '【試験・調整・検査計画書】自主検査計画書（自主検査計画例③強電設備）': {
                label: '',
                files: [],
            },
            '【試験・調整・検査計画書】自主検査計画書（自主検査計画例④弱電設備）': {
                label: '',
                files: [],
            },
            '【試験・調整・検査計画書】自主検査計画書（自主検査計画例⑤直流電源装置　試運転調整）': {
                label: '',
                files: [],
            },
            '【試験・調整・検査計画書】自主検査計画書（自主検査計画例⑥無停電電源装置　試運転調整）': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】工程内検査チェックシート（施工要領書とセットで作成した帳票）': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】自主検査（計画・実施）報告書（自家用工作物）': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】自主検査報告書（中間）': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】自主検査報告書（最終）': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】自主検査指摘事項リスト（是正処置含む）': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】接地抵抗測定表': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】幹線設備試験帳票': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】電灯幹線設備試験帳票': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】動力幹線設備試験帳票': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】締付確認帳票　（幹線設備試験　測定記録表）': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】電灯分電盤　絶縁抵抗測定・締付確認表': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】動力回路　絶縁抵抗測定・締付確認表': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】コンセント試験帳票': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】一般照明・非常照明　照度測定表': {
                label: '',
                files: [],
            },
            '【試験・調整・検査報告書】電力量計　確認帳票': {
                label: '',
                files: [],
            },
        },
    },
    '原価管理書類 C': {
        label: 'AB',
        subfolders: {
            '実行予算原価計算書（A）': {
                label: 'B',
                files: [],
            },
            '実行予算原価計算書（B）': {
                label: '',
                files: [],
            },
            '実行予算原価計算書（C=A＋B）': {
                label: '',
                files: [],
            },
            '変更案・合理化案 検討書': {
                label: 'AB',
                files: [],
            },
            '外注費検討書': {
                label: 'B',
                files: [],
            },
            '副資材検討書': {
                label: 'B',
                files: [],
            },
            '経費・間接工事費検討書・現場管理費検討書': {
                label: 'B',
                files: [],
            },
            '設計変更増減一覧表': {
                label: '',
                files: [],
            },
            '収支管理表': {
                label: '',
                files: [],
            },
            '稼働人員山積予定・実績': {
                label: '',
                files: [],
            },
            '外注見積条件書': {
                label: '',
                files: [],
            },
        },
    },
    '工程管理書類 D': {
        label: 'AB',
        subfolders: {
            '【総合工程表+山積 ・受領建築マスター工程・仮設計画】総合工程表+山積': {
                label: 'AB',
                files: [],
            },
            '【総合工程表+山積 ・受領建築マスター工程・仮設計画】受領建築マスター工程': {
                label: 'AB',
                files: [],
            },
            '【総合工程表+山積 ・受領建築マスター工程・仮設計画】仮設計画': {
                label: 'AB',
                files: [],
            },
            '諸官庁申請届出工程表': {
                label: 'AB',
                files: [],
            },
            '資機材生産工程表': {
                label: 'AB',
                files: [],
            },
            '月間工程表': {
                label: '',
                files: [],
            },
            '週間工程表': {
                label: '',
                files: [],
            },

        },
    },
    '安全衛生環境管理書類 S': {
        label: 'AB',
        subfolders: {
            '施工体制台帳作成建設工事通知書（元請）': {
                label: '',
                files: [],
            },
            '施工体制台帳（元請）': {
                label: '',
                files: [],
            },
            '建設業法・雇用改善法に基づく届出書(再下請負通知書)': {
                label: '',
                files: [],
            },
            '協力会社編成表（下請負業者編成表）': {
                label: '',
                files: [],
            },
            '工事作業所災害防止協議会兼施工体系図（元請）': {
                label: 'AB',
                files: [],
            },
            '安全作業指示書（兼）安全日報　（件名工事用）': {
                label: '',
                files: [],
            },
            '安全日報（作業指示書・RAKY)（元請・小口工事用）': {
                label: '',
                files: [],
            },
            '元請現場用安全日誌(作業間連絡調整用）': {
                label: '',
                files: [],
            },
            '安全衛生環境管理計画書（通期）': {
                label: 'AB',
                files: [],
            },
            '環境法規制等順守計画（法規制チェックシート、法規制等順守評価表）': {
                label: 'AB',
                files: [],
            },
            '安全衛生計画書（月間）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　新設送電操作作業－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　新設送電操作作業－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　新設送電操作作業－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　新設送電操作作業－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　新設送電操作作業－単線結線図・幹線系統図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　新設送電操作作業－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　新設送電操作作業－その他説明資料': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　停電作業－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　停電作業－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　停電作業－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　停電作業－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　停電作業－単線結線図・シーケンス図・幹線系統図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　停電作業－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　停電作業－その他説明資料': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　高低圧活線近接作業－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　高低圧活線近接作業－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　高低圧活線近接作業－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　高低圧活線近接作業－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　高低圧活線近接作業－単線結線図・幹線系統図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　高低圧活線近接作業－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　高低圧活線近接作業－その他説明資料': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　既設ケーブル撤去作業－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　既設ケーブル撤去作業－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　既設ケーブル撤去作業－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　既設ケーブル撤去作業－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　既設ケーブル撤去作業－撤去ケーブル系統図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　既設ケーブル撤去作業－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】電気工事　既設ケーブル撤去作業－その他説明資料': {
                label: '',
                files: [],
            },
            '【安全作業計画書】高所作業車使用作業－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】高所作業車使用作業－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】高所作業車使用作業－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】高所作業車使用作業－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】高所作業車使用作業－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】高所作業車使用作業－重機性能表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】高所作業車使用作業－その他説明資料（支店社ルール等）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】特別な高所作業－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】特別な高所作業－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】特別な高所作業－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】特別な高所作業－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】特別な高所作業－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】特別な高所作業－重機性能表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】特別な高所作業－その他説明資料（支店社ルール等）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】重量物揚重運搬据付作業－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】重量物揚重運搬据付作業－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】重量物揚重運搬据付作業－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】重量物揚重運搬据付作業－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】重量物揚重運搬据付作業－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】重量物揚重運搬据付作業－重機性能表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】重量物揚重運搬据付作業－その他説明資料（支店社ルール等）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】建柱・装柱作業－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】建柱・装柱作業－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】建柱・装柱作業－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】建柱・装柱作業－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】建柱・装柱作業－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】建柱・装柱作業－重機性能表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】建柱・装柱作業－その他説明資料（支店社ルール等）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】火気使用（溶接・溶断作業）－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】火気使用（溶接・溶断作業）－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】火気使用（溶接・溶断作業）－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】火気使用（溶接・溶断作業）－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】火気使用（溶接・溶断作業）－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】火気使用（溶接・溶断作業）－その他説明資料（支店社ルール等）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】掘削作業及び付帯作業－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】掘削作業及び付帯作業－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】掘削作業及び付帯作業－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】掘削作業及び付帯作業－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】掘削作業及び付帯作業－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】掘削作業及び付帯作業－重機性能表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】掘削作業及び付帯作業－その他説明資料（支店社ルール等）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】酸欠作業(地下ピット､マンホール）－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】酸欠作業(地下ピット､マンホール）－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】酸欠作業(地下ピット､マンホール）－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】酸欠作業(地下ピット､マンホール）－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】酸欠作業(地下ピット､マンホール）－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】酸欠作業(地下ピット､マンホール）－酸素濃度測定器資料': {
                label: '',
                files: [],
            },
            '【安全作業計画書】酸欠作業(地下ピット､マンホール）－酸素濃度測定器点検記録用紙': {
                label: '',
                files: [],
            },
            '【安全作業計画書】酸欠作業(地下ピット､マンホール）－作業中入構者名簿': {
                label: '',
                files: [],
            },
            '【安全作業計画書】酸欠作業(地下ピット､マンホール）－酸素欠乏作業記録用紙': {
                label: '',
                files: [],
            },
            '【安全作業計画書】酸欠作業(地下ピット､マンホール）－その他説明資料（支店社ルール等）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】石綿作業(周辺作業)－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】石綿作業(周辺作業)－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】石綿作業(周辺作業)－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】石綿作業(周辺作業)－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】石綿作業(周辺作業)－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】石綿作業(周辺作業)－その他説明資料（支店社ルール等）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】機械引きケーブル延線作業－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】機械引きケーブル延線作業－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】機械引きケーブル延線作業－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】機械引きケーブル延線作業－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】機械引きケーブル延線作業－系統図・ケーブルリスト': {
                label: '',
                files: [],
            },
            '【安全作業計画書】機械引きケーブル延線作業－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】機械引きケーブル延線作業－機器性能表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】機械引きケーブル延線作業－その他説明資料（支店社ルール等）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】ボイラー据付・取扱い・改造・修理－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】ボイラー据付・取扱い・改造・修理－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】ボイラー据付・取扱い・改造・修理－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】ボイラー据付・取扱い・改造・修理－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】ボイラー据付・取扱い・改造・修理－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】ボイラー据付・取扱い・改造・修理－その他説明資料（支店社ルール等）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】その他危険作業（型枠支保工、有機溶剤、粉じん）－表紙（作業内容、主要概要、作業体制、資格、保護具、対策）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】その他危険作業（型枠支保工、有機溶剤、粉じん）－社内確認指示事項・処置報告': {
                label: '',
                files: [],
            },
            '【安全作業計画書】その他危険作業（型枠支保工、有機溶剤、粉じん）－安全作業手順書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】その他危険作業（型枠支保工、有機溶剤、粉じん）－スケジュール表': {
                label: '',
                files: [],
            },
            '【安全作業計画書】その他危険作業（型枠支保工、有機溶剤、粉じん）－平面図・配置図・立面図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】その他危険作業（型枠支保工、有機溶剤、粉じん）－その他説明資料（支店社ルール等）': {
                label: '',
                files: [],
            },
            '【諸口工事】 安全作業計画書及び品質環境計画書及び作業日報': {
                label: '',
                files: [],
            },
            '事前調査写真台帳': {
                label: '',
                files: [],
            },
            '持込機械工具使用届': {
                label: '',
                files: [],
            },
            '可搬式作業台・脚立・ステージ・ローリングタワー点検表': {
                label: '',
                files: [],
            },
            '枠組・単管足場点検表': {
                label: '',
                files: [],
            },
            '危険物・有害物持込使用届': {
                label: '',
                files: [],
            },
            '火気使用願': {
                label: '',
                files: [],
            },
            '仮設電気設備漏電遮断装置(ＥＬＣＢ)定期性能試験記録表': {
                label: '',
                files: [],
            },
            'アーク溶接機自動電撃防止装置(年次)定期自主検査表': {
                label: '',
                files: [],
            },
            '現地RAＫＹ活動表': {
                label: '',
                files: [],
            },
            '現地(化学物質)RAKY活動表': {
                label: '',
                files: [],
            },
            '非常連絡表': {
                label: 'AB',
                files: [],
            },
            '現場常備カード（非常駐時使用）': {
                label: 'A',
                files: [],
            },
            '月次安全書類報告書': {
                label: '',
                files: [],
            },
            '現場出退管理簿': {
                label: '',
                files: [],
            },
            '分電盤仮設設備点検票': {
                label: '',
                files: [],
            },
            '移動用発電機の点検票': {
                label: '',
                files: [],
            },
            '現場点検表': {
                label: '',
                files: [],
            },
            '事業主パトロール点検表': {
                label: '',
                files: [],
            },
            '作業員一覧表': {
                label: '',
                files: [],
            },
            '送り出し教育資料兼実施報告書': {
                label: '',
                files: [],
            },
            '新規入場者アンケート、新規入場時実施報告書(GC書式)': {
                label: '',
                files: [],
            },
            '送り出し教育・新規入場者教育資料': {
                label: '',
                files: [],
            },
            '女性及び年少者の就労制限チェックリスト': {
                label: '',
                files: [],
            },
            'ハットヒヤリ体験票': {
                label: '',
                files: [],
            },
            '外国人建設就労者現場入場届出書': {
                label: '',
                files: [],
            },
            '適正配置報告書': {
                label: '',
                files: [],
            },

        },
    },
    'コンプライアンス管理 ＋C': {
        label: 'AB',
        subfolders: {
            'コンプライアンス管理計画書': {
                label: 'AB',
                files: [],
            },

        },
    },
    '資材管理書類': {
        label: 'AB',
        subfolders: {
            '機器メーカーリスト': {
                label: 'AB',
                files: [],
            },
            '受入検査（受入チェックシート）': {
                label: '',
                files: [],
            },
            '受入検査（材料（機器）搬入・検査報告）': {
                label: '',
                files: [],
            },
            '工場検査立会要項書': {
                label: '',
                files: [],
            },
            '資材検収一覧表': {
                label: '',
                files: [],
            },
            '資材納品伝票': {
                label: '',
                files: [],
            },

        },
    },
    '諸官庁申請書類': {
        label: 'AB',
        subfolders: {
            '諸官庁申請届出書管理表': {
                label: 'AB',
                files: [],
            },
            '諸官庁打合せ記録': {
                label: 'A',
                files: [],
            },
            '【安全作業計画書】【諸官庁申請書類（控）】１）　消防': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【諸官庁申請書類（控）】２）　航空局': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【諸官庁申請書類（控）】３）　建築指導課': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【諸官庁申請書類（控）】４）　経済産業省保安監督部': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【諸官庁申請書類（控）】５）　電力会社': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【諸官庁申請書類（控）】６）　ＮＴＴ': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【諸官庁申請書類（控）】７）　労働基準監督署': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【諸官庁申請書類（控）】８）　警察署': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【諸官庁申請書類（控）】９）　地方自治体': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【諸官庁申請書類（控）】１０）　保健所': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【諸官庁申請書類（控）】１１）　水道局': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【諸官庁申請書類（控）】１２）　下水道局': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【諸官庁申請書類（控）】１３）　ガス工事': {
                label: '',
                files: [],
            },

        },
    },
    '検査記録': {
        label: '',
        subfolders: {
            '【安全作業計画書】【検査記録】検査記録（発注者）（ゼネコン）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【検査記録】検査記録（設計監理）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【検査記録】検査記録（施主）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【検査記録】検査記録（諸官庁）': {
                label: '',
                files: [],
            },

        },
    },
    '完成引渡書類': {
        label: '',
        subfolders: {
            '【安全作業計画書】【完成引渡書類】完成図（竣工図）': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【完成引渡書類】機器製作図': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【完成引渡書類】取扱説明書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【完成引渡書類】工事記録写真': {
                label: '',
                files: [],
            },

        },
    },
    '現場指示': {
        label: '',
        subfolders: {
            '【安全作業計画書】【施工計画書・施工要領書・施工図】施工計画書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【施工計画書・施工要領書・施工図】施工要領書': {
                label: '',
                files: [],
            },
            '【安全作業計画書】【施工計画書・施工要領書・施工図】施工図': {
                label: '',
                files: [],
            },

        },
    },



};

const Folder = ({ folder, subfolders, label, showLabel }) => {
    const [expanded, setExpanded] = useState(false);
    // const [showFolder, setShowFolder] = useState(true);

    const toggleExpand = () => setExpanded(!expanded);
    // const toggleShowFolder = () => setShowFolder(!showFolder);
    // console.log("folder=", folder)
    // console.log("subfolders=", subfolders)
    // console.log("label=", label)
    // console.log("showLabel=", showLabel)

    // このフォルダが表示対象かどうかを判断する
    const shouldShowFolder = label === 'All' || showLabel === null || label.includes(showLabel); //label === showLabel;

    return toggleExpand && shouldShowFolder ? (
        <div>
            <Flex style={{ display: 'flex', alignItems: 'center' }}>
                <Flex onClick={toggleExpand} style={{ cursor: 'pointer' }} alignItems={'center'}>
                    {/* 📂 */}
                    <FontAwesomeIcon icon={expanded ? faFolderOpen : faFolder} />
                    {folder}

                    {/* (Label: {label}) */}
                </Flex>
                <Flex>
                    <Link
                        href="#"
                        color="#007EB9"
                    >
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    </Link>
                    <Link
                        href="#"
                        color="#007EB9"
                    >
                        <FontAwesomeIcon icon={faFileArrowDown} />
                    </Link>
                </Flex>
                {/* <button onClick={toggleShowFolder}>
                    {showFolder ? '隠す' : '表示する'}
                </button> */}
            </Flex>
            {expanded &&
                subfolders &&
                Object.entries(subfolders).map(([folderName, folderData]) => (
                    <div key={folderName} style={{ paddingLeft: '1rem' }} >
                        <Folder
                            folder={folderName}
                            subfolders={folderData.subfolders}
                            label={folderData.label}
                            showLabel={showLabel}
                        />
                        {folderData.files &&
                            folderData.files.map((file) => (
                                <Flex key={file}
                                    alignItems={'center'}
                                    style={{ paddingLeft: '2rem', paddingTop: '0.1rem', paddingBottom: '0.1rem', fontSize: '12px' }}
                                >
                                    {/* 📄 */}
                                    <FontAwesomeIcon icon={faFile} />
                                    <Link
                                        href="#"
                                        color="#007EB9"
                                    >
                                        {file}
                                    </Link>
                                </Flex>
                            ))}
                    </div>
                ))}
        </div>
    ) : null;
};

const DocumentsList = () => {
    const { tokens } = useTheme()
    // const [showOnlyFolder1, setShowOnlyFolder1] = useState(false);
    // const toggleShowFolder1 = () => setShowOnlyFolder1(!showOnlyFolder1);

    // const [showAll, setShowAll] = useState(true);
    // const toggleShowAll = () => setShowAll(!showAll);

    const [showLabel, setShowLabel] = useState(null);
    // const toggleShowLabel = (label) => setShowLabel(showLabel === label ? null : label);

    const handleLabelChange = (event) => {
        setShowLabel(event.target.value === 'All' ? null : event.target.value);
        // console.log("set showLabel", event.target.value)
    };

    // ラベルごとのフォルダ件数をカウントする
    const labelCounts = {};
    const countFolders = (folders, label) => {
        let count = 0;
        Object.values(folders).forEach((folderData) => {
            count++;
            if (folderData.label.includes(label)) {
                labelCounts[label] = (labelCounts[label] || 0) + 1;
            }
            if (folderData.subfolders) {
                count += countFolders(folderData.subfolders, label);
            }
        });
        return count;
    };
    countFolders(folders, 'A');
    countFolders(folders, 'B');
    const totalCount = countFolders(folders);

    return (
        <div>
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
                    <h1>作成書類一覧</h1>

                    {/* <button onClick={toggleShowFolder1}>
                        {showOnlyFolder1 ? 'Show All' : '営業関連書類のみ表示'}
                    </button> */}
                    {/* <button onClick={() => toggleShowLabel('A')}>
                        {showLabel === 'A' ? 'Hide Label A' : 'Show Label A'}
                    </button>
                    <button onClick={() => toggleShowLabel('B')}>
                        {showLabel === 'B' ? 'Hide Label B' : 'Show Label B'}
                    </button> */}
                    {/* <button onClick={toggleShowAll}>
                        {showAll ? '全て非表示' : '全て表示'}
                    </button> */}
                    <div>
                        {/* <label htmlFor="labelSelect">Select Label: </label> */}
                        {/* <select id="labelSelect" value={showLabel || 'All'} onChange={handleLabelChange}>
                        </select> */}
                        <SelectField
                            label=""
                            descriptiveText="必要な会議資料を選択してください。"
                            id="labelSelect"
                            value={showLabel || 'All'}
                            onChange={handleLabelChange}
                        >
                            <option value="All">全書類（{totalCount}フォルダ）</option>
                            <option value="A">事前検討会議（{labelCounts['A'] || 0}フォルダ）</option>
                            <option value="B">施工計画会議（{labelCounts['B'] || 0}フォルダ）</option>
                        </SelectField>
                    </div>
                    {Object.entries(folders)
                        //.filter(([folderName]) => !showOnlyFolder1 || folderName === '営業関連書類')
                        .filter(([folderName, folderData]) =>
                            //showAll || folderData.showFolder === true
                            showLabel === null || folderData.label.includes(showLabel) //folderData.label === showLabel
                        )
                        .map(([folderName, folderData]) => (
                            <Folder
                                key={folderName}
                                folder={folderName}
                                subfolders={folderData.subfolders}
                                label={folderData.label}
                                showLabel={showLabel}
                            />
                        ))}
                </Flex>
            </View>

        </div>
    )
}

export default DocumentsList;