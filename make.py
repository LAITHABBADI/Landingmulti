import os
import json

def create_directory(path):
    if not os.path.exists(path):
        os.makedirs(path)

def create_file(path, content):
    with open(path, 'w') as f:
        f.write(content)

def create_json_file(path, data):
    with open(path, 'w') as f:
        json.dump(data, f, indent=2)

def modify_file(path, search_string, replace_string):
    with open(path, 'r') as f:
        content = f.read()
    modified_content = content.replace(search_string, replace_string)
    with open(path, 'w') as f:
        f.write(modified_content)

def main():
    project_root = os.getcwd()
    locales_dir = os.path.join(project_root, 'public', 'locales')
    src_app_dir = os.path.join(project_root, 'src', 'app')
    src_components_dir = os.path.join(project_root, 'src', 'components')
    src_ui_dir = os.path.join(src_components_dir, 'ui')
    src_layout_dir = os.path.join(src_components_dir, 'layout')

    languages = ['en', 'ar', 'es', 'de', 'zh']

    # 1. Install next-i18next and i18next
    print("Installing next-i18next and i18next...")
    os.system('npm install next-i18next i18next')

    # 2. Create i18n.config.ts
    print("Creating i18n.config.ts...")
    i18n_config_content = """
import { type InitOptions } from 'i18next';
import path from 'path';

const i18nConfig: InitOptions = {
  fallbackLng: 'en',
  lng: 'en',
  debug: process.env.NODE_ENV === 'development',
  supportedLngs: ['en', 'ar', 'es', 'de', 'zh'],
  ns: ['common', 'home'],
  defaultNS: 'common',
  backend: {
    loadPath: path.resolve('./public/locales/{{lng}}/{{ns}}.json'),
  },
  react: {
    useSuspense: false,
  },
};

export default i18nConfig;
"""
    create_file(os.path.join(project_root, 'i18n.config.ts'), i18n_config_content)

    # 3. Create public/locales directory and language subdirectories
    print("Creating locales directories...")
    create_directory(locales_dir)
    for lang in languages:
        create_directory(os.path.join(locales_dir, lang))

    # 4. Create example JSON files
    print("Creating example JSON files...")
    for lang in languages:
        common_data = {
            "en": {
                "welcome": "Welcome to our website!",
                "learnMore": "Learn More",
                "footerText": "© 2024 KGRG. All rights reserved."
            },
            "ar": {
                "welcome": "مرحبا بكم في موقعنا!",
                "learnMore": "إقرأ المزيد",
                "footerText": "© 2024 KGRG. جميع الحقوق محفوظة."
            },
            "es": {
                "welcome": "¡Bienvenido a nuestro sitio web!",
                "learnMore": "Aprende Más",
                "footerText": "© 2024 KGRG. Todos los derechos reservados."
            },
            "de": {
                "welcome": "Willkommen auf unserer Webseite!",
                "learnMore": "Mehr erfahren",
                "footerText": "© 2024 KGRG. Alle Rechte vorbehalten."
            },
            "zh": {
                "welcome": "欢迎来到我们的网站！",
                "learnMore": "了解更多",
                "footerText": "© 2024 KGRG。版权所有。"
            }
        }[lang]
        home_data = {
            "en": {
                "heroTitle": "Your Amazing Landing Page",
                "heroSubtitle": "A great place to showcase your product or service."
            },
            "ar": {
                "heroTitle": "صفحتك المقصودة المذهلة",
                "heroSubtitle": "مكان رائع لعرض منتجك أو خدمتك."
            },
            "es": {
                "heroTitle": "Tu Increíble Página de Aterrizaje",
                "heroSubtitle": "Un gran lugar para mostrar tu producto o servicio."
            },
            "de": {
                "heroTitle": "Ihre fantastische Landingpage",
                "heroSubtitle": "Ein großartiger Ort, um Ihr Produkt oder Ihre Dienstleistung zu präsentieren."
            },
            "zh": {
                "heroTitle": "你惊艳的着陆页",
                "heroSubtitle": "展示您的产品或服务的绝佳场所。"
            }
        }[lang]
        create_json_file(os.path.join(locales_dir, lang, 'common.json'), common_data)
        create_json_file(os.path.join(locales_dir, lang, 'home.json'), home_data)

    # 5. Modify src/app/layout.tsx
    print("Modifying src/app/layout.tsx...")
    layout_path = os.path.join(src_app_dir, 'layout.tsx')
    modify_file(
        layout_path,
        '</body>',
        """
        <I18nextProvider i18n={i18nConfig}>
          {children}
        </I18nextProvider>
      </body>
    </html>
  );
}
"""
    )
    modify_file(
        layout_path,
        'import type { Metadata } from \'next\';',
        """
import type { Metadata } from 'next';
import { I18nextProvider } from 'next-i18next';
import i18nConfig from '../../i18n.config';
"""
    )

    # 6. Create LanguageSwitcher component
    print("Creating LanguageSwitcher component...")
    language_switcher_content = """
'use client';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.refresh();
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ar')}>AR</button>
      <button onClick={() => changeLanguage('es')}>ES</button>
      <button onClick={() => changeLanguage('de')}>DE</button>
      <button onClick={() => changeLanguage('zh')}>ZH</button>
    </div>
  );
};

export default LanguageSwitcher;
"""
    create_file(os.path.join(src_ui_dir, 'language-switcher.tsx'), language_switcher_content)

    # 7. Modify src/components/layout/navbar.tsx
    print("Modifying src/components/layout/navbar.tsx...")
    navbar_path = os.path.join(src_layout_dir, 'navbar.tsx')
    modify_file(
        navbar_path,
        '</div>',
        """
          <LanguageSwitcher />
          <Button variant="outline">Contact</Button>
        </div>
      </div>
    </header>
  );
}
"""
    )
    modify_file(
        navbar_path,
        'import Link from \'next/link\';',
        """
import Link from 'next/link';
import LanguageSwitcher from '../ui/language-switcher';
"""
    )

    print("All steps completed successfully!")

if __name__ == "__main__":
    main()