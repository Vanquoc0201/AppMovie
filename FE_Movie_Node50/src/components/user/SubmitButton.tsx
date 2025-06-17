interface Props {
  isPending: boolean;
}

export const SubmitButton = ({ isPending }: Props) => (
  <button
    type="submit"
    disabled={isPending}
    className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-black transition-all disabled:opacity-60"
  >
    {isPending ? 'Đang thêm...' : 'Thêm người dùng'}
  </button>
);
