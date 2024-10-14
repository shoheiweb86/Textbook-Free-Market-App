'use client'

import Header from '@/ui/Header'
import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  // メールアドレスとパスワードの状態を useState で管理
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  // フォーム送信処理
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // ここにログインロジックを実装します
    console.log('Form submitted')
  }

  // メールアドレスとパスワードが入力されているかを確認
  const isFormValid = email && password

  return (
    <div>
      <Header />
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-semibold">ログイン</h1>
            <p className="text-sm text-gray-500">アカウントにログインしてください</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // 入力変更時に状態を更新
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                パスワード
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // 入力変更時に状態を更新
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4" role="alert">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={!isFormValid} // 全てのフィールドが入力されていない場合はボタンを無効化
              className={`w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white ${
                isFormValid ? 'bg-indigo-300 hover:bg-indigo-500' : 'bg-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              ログイン
            </button>
          </form>
        </div>
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-center text-gray-500">
            アカウントをお持ちでないですか？{' '}
            <Link href="/auth/register" className="text-primary hover:underline">
              新規登録
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}