import { ProposalProps } from "@/types";
import { formatDistance } from "date-fns";
export default function Proposal(props: ProposalProps) {
  return (
    <>
      <div className="mb-4 transition-colors border-t border-b rounded-none md:border md:rounded-lg bg-skin-block-bg timeline-proposal">
        <div className="leading-6">
          <a className="block p-4 text-color">
            <div className="mb-2">
              <span className="ml-2"></span>由 {props.proposer}发布
              <span className="inline-block float-right text-white bg-purple-600 State">
                已关闭
              </span>
            </div>
            <h3 className="my-1">{props.title}</h3>
            <p className="mb-2 break-words text-md">{props.description}</p>
            <div>
              <span className="flex items-center mt-2 space-x-1">
                <span className="mt-1">
                  {formatDistance(
                    new Date(props.submission_time! / 1000000),
                    new Date(),
                    {
                      addSuffix: true,
                    }
                  )}
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
