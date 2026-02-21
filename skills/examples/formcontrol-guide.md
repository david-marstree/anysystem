---
id: formcontrol-guide
aliases: []
tags: []
---

# FormControl - 統一表單控制項 API

FormControl 是 AnySystem Design 中最強大、最方便的高階組件，涵蓋了 12 種表單輸入類型，提供統一的 API，大幅簡化表單開發。

## 為什麼優先使用 FormControl？

### 優點

1. **統一 API** - 所有表單控制項使用相同方式，降低學習成本
2. **自動 Label 管理** - 自動處理浮動標籤、錯誤提示
3. **統一 variant** - sm/md 尺寸統一控制
4. **簡化 onChange** - 標準化的 value change 處理
5. **自動包裹** - 無需手動包 Label 組件
6. **Lazy Loading** - 組件延遲載入，優化效能

### 涵蓋的 12 種類型

| type | 內部組件 | 用途 | 特色 |
|------|---------|------|------|
| `text` | Input | 文字輸入 | 基本輸入框 |
| `email` | Input | Email 輸入 | 自動驗證格式 |
| `number` | Input | 數字輸入 | 數字鍵盤 |
| `password` | PasswordInput | 密碼輸入 | 顯示/隱藏切換 |
| `tel` | TelephoneInput | 電話輸入 | 國碼前綴選擇 |
| `date` | DatePicker | 日期選擇 | 日曆選擇器 |
| `datetime` | DatePicker | 日期時間選擇 | 包含時間選擇 |
| `select` | Selectbox | 下拉選單 | 單選下拉 |
| `autocomplete` | AutoComplete | 自動完成輸入 | 搜尋下拉 |
| `radio` | RadioGroup | 單選群組 | 視覺化單選 |
| `switch` | Switch | 開關切換 | ON/OFF 切換 |
| `confirm` | Checkbox | 確認框 | 單一確認框 |

## 基本使用

### 文字輸入

```tsx
import { FormControl } from 'anysystem-design';

<FormControl
  type="text"
  name="username"
  value={username}
  onChange={setUsername}
  labelProps={{ label: "使用者名稱" }}
  placeholder="請輸入使用者名稱"
/>
```

### 密碼輸入

```tsx
<FormControl
  type="password"
  name="password"
  value={password}
  onChange={setPassword}
  labelProps={{ label: "密碼", variant: "md" }}
/>
```

### 下拉選單

```tsx
const countries = [
  { id: '1', label: '台灣', value: 'tw', enable: true },
  { id: '2', label: '美國', value: 'us', enable: true },
  { id: '3', label: '日本', value: 'jp', enable: true }
];

<FormControl
  type="select"
  name="country"
  value={country}
  onChange={setCountry}
  labelProps={{ label: "國家" }}
  options={countries}
/>
```

### 日期選擇

```tsx
import moment from 'moment';

<FormControl
  type="date"
  name="birthday"
  value={moment().format('X')}  // Unix timestamp (秒)
  onChange={setBirthday}
  labelProps={{ label: "生日" }}
/>
```

### 電話輸入

```tsx
const prefixes = [
  { id: '1', label: '+886', value: '+886', enable: true },
  { id: '2', label: '+86', value: '+86', enable: true }
];

<FormControl
  type="tel"
  name="phone"
  value={phone}
  onChange={setPhone}
  labelProps={{ label: "電話" }}
  phonePrefixOptions={prefixes}
  phonePrefix="+886"
/>
```

### 開關切換

```tsx
<FormControl
  type="switch"
  name="notifications"
  value={notifications ? "on" : ""}
  onChange={(val) => setNotifications(val === "on")}
  labelProps={{ label: "通知設定" }}
/>
```

## 進階使用

### 配合 Formik 驗證

```tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormControl, Button } from 'anysystem-design';

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required()
});

function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, isSubmitting }) => (
        <Form>
          <FormControl
            type="email"
            name="email"
            value={values.email}
            onChange={(val) => handleChange('email')(val)}
            labelProps={{
              label: "Email",
              isError: touched.email && Boolean(errors.email),
              errorMessage: touched.email ? errors.email : ''
            }}
          />

          <FormControl
            type="password"
            name="password"
            value={values.password}
            onChange={(val) => handleChange('password')(val)}
            labelProps={{
              label: "密碼",
              isError: touched.password && Boolean(errors.password),
              errorMessage: touched.password ? errors.password : ''
            }}
          />

          <Button type="submit" disabled={isSubmitting}>
            登入
          </Button>
        </Form>
      )}
    </Formik>
  );
}
```

### 完整表單範例

```tsx
function UserForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    birthday: moment().format('X'),
    phone: '+886-',
    notifications: true,
    terms: false
  });

  const handleChange = (field) => (value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const genders = [
    { id: 'm', label: '男', value: 'male', enable: true },
    { id: 'f', label: '女', value: 'female', enable: true }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormControl
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange('name')}
        labelProps={{ label: "姓名", required: true }}
        placeholder="請輸入姓名"
      />

      <FormControl
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange('email')}
        labelProps={{ label: "Email", required: true }}
      />

      <FormControl
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange('password')}
        labelProps={{ label: "密碼" }}
      />

      <FormControl
        type="select"
        name="gender"
        value={form.gender}
        onChange={handleChange('gender')}
        labelProps={{ label: "性別" }}
        options={genders}
      />

      <FormControl
        type="date"
        name="birthday"
        value={form.birthday}
        onChange={handleChange('birthday')}
        labelProps={{ label: "生日" }}
      />

      <FormControl
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange('phone')}
        labelProps={{ label: "電話" }}
        phonePrefixOptions={phonePrefixes}
      />

      <FormControl
        type="switch"
        name="notifications"
        value={form.notifications ? "on" : ""}
        onChange={(val) => handleChange('notifications')(val === "on")}
        labelProps={{ label: "接收通知" }}
      />

      <FormControl
        type="confirm"
        name="terms"
        value={form.terms ? "1" : ""}
        onChange={(val) => handleChange('terms')(val === "1")}
        labelProps={{ label: "我同意條款" }}
      />

      <Button type="submit" variant="primary">
        提交
      </Button>
    </form>
  );
}
```

## Variant 尺寸

FormControl 支援兩種尺寸：

```tsx
// 中型（預設）
<FormControl
  type="text"
  name="field"
  variant="md"
  labelProps={{ label: "中型輸入", variant: "md" }}
/>

// 小型
<FormControl
  type="text"
  name="field"
  variant="sm"
  labelProps={{ label: "小型輸入", variant: "sm" }}
/>
```

## labelProps 詳解

`labelProps` 是 FormControl 最強大的功能：

```tsx
labelProps={{
  label: "欄位名稱",           // 必填
  type: "border",             // border | normal | horizontal
  variant: "md",              // sm | md
  isError: false,             // 是否錯誤
  errorMessage: "錯誤訊息"     // 錯誤提示
}}
```

## 什麼時候不用 FormControl？

### 使用底層組件的場景

1. **不需要 Label** - 獨立使用，無標籤
   ```tsx
   <Input name="search" placeholder="搜尋..." />
   ```

2. **客製化佈局** - 特殊排版需求
   ```tsx
   <div className="flex gap-2">
     <Input name="code1" />
     <Input name="code2" />
   </div>
   ```

3. **嵌入其他組件** - 被其他容器包裹
   ```tsx
   <DataTable
     data={data}
     fields={[
       {
         key: 'name',
         label: 'Name',
         component: (props) => <Input {...props} />
       }
     ]}
   />
   ```

4. **高度客製化** - 需要完全控制
   ```tsx
   <PasswordInput
     name="password"
     className="custom-password"
     inputBefore={<Icon />}
   />
   ```

## 最佳實踐

### ✅ 推薦

- 90% 的表單場景使用 FormControl
- 統一使用 labelProps 管理標籤
- 配合 variant 控制尺寸
- 搭配 Formik 進行驗證

### ❌ 避免

- 在簡單場景過度使用底層組件
- 混用多種表單 API 風格
- 忽略 variant 一致性

## 遷移指南

### 從底層組件遷移到 FormControl

**之前：**
```tsx
<Label label="Email" type="border" variant="md">
  <Input
    name="email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</Label>
```

**之後：**
```tsx
<FormControl
  type="email"
  name="email"
  value={email}
  onChange={setEmail}
  labelProps={{ label: "Email" }}
/>
```

程式碼減少 50%，功能相同！

## 總結

FormControl 是 AnySystem Design 表單開發的首選方案：

- **覆蓋率高** - 12 種表單類型，滿足 90% 需求
- **API 統一** - 一致的使用體驗
- **開發快速** - 減少樣板程式碼
- **易於維護** - 標準化的表單結構

**建議**：優先使用 FormControl，只在特殊需求時退回到底層組件。
